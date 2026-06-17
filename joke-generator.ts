/**
 * Random Joke Generator using JokeAPI
 * Fetches random jokes from an external API and displays them
 */

interface JokeResponse {
  error: boolean;
  category: string;
  type: string;
  joke?: string; // For single-part jokes
  setup?: string; // For two-part jokes
  delivery?: string; // For two-part jokes
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
  id: number;
  safe: boolean;
}

/**
 * Fetches a random joke from JokeAPI
 * @param includeNSFW - Whether to include NSFW jokes (default: false)
 * @returns Promise with the formatted joke
 */
async function getRandomJoke(includeNSFW: boolean = false): Promise<string> {
  try {
    // Build the API URL
    const safetyFlag = includeNSFW ? "" : "safe";
    const apiUrl = `https://v2.jokeapi.dev/joke/Any${safetyFlag ? "?safe-mode" : ""}`;

    console.log(`Fetching joke from: ${apiUrl}`);

    // Fetch the joke from the API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const joke: JokeResponse = await response.json();

    if (joke.error) {
      throw new Error("Failed to retrieve a joke from the API");
    }

    // Format the joke based on type
    let formattedJoke: string;

    if (joke.type === "single") {
      formattedJoke = joke.joke || "No joke content available";
    } else if (joke.type === "twopart") {
      formattedJoke = `${joke.setup}\n\n${joke.delivery}`;
    } else {
      formattedJoke = "Unknown joke format";
    }

    return formattedJoke;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`Failed to fetch joke: ${errorMessage}`);
  }
}

/**
 * Fetches and displays multiple random jokes
 * @param count - Number of jokes to fetch (default: 1)
 * @param includeNSFW - Whether to include NSFW jokes (default: false)
 */
async function getMultipleJokes(
  count: number = 1,
  includeNSFW: boolean = false
): Promise<void> {
  try {
    console.log(`\n🎭 Getting ${count} random joke(s)...\n`);

    for (let i = 1; i <= count; i++) {
      const joke = await getRandomJoke(includeNSFW);
      console.log(`📝 Joke ${i}:\n${joke}\n`);

      // Add a small delay between requests to avoid rate limiting
      if (i < count) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    console.log("✅ Done!");
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error(`❌ Error: ${errorMessage}`);
  }
}

// Main execution
async function main(): Promise<void> {
  try {
    // Get a single joke
    const singleJoke = await getRandomJoke();
    console.log("🎭 Random Joke:\n");
    console.log(singleJoke);
    console.log("\n---\n");

    // Get multiple jokes (example with 3 jokes)
    await getMultipleJokes(3);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error(`Error: ${errorMessage}`);
    process.exit(1);
  }
}

// Run the main function
main();

export { getRandomJoke, getMultipleJokes };
