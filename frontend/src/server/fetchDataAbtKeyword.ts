
export const dataOfKeyword = async (prompt: string) => {
    console.log("hitted");

    if (!prompt.trim()) {
      // setError("Please enter a category to analyze!");
      return;
    }

    // setIsLoading(true);
    // setError(null);

    try {
      const res = await fetch("http://localhost:8081/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      // console.log("Res: ", res.json)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      const parsedData = data.response;
      console.log(parsedData);

      // if(parsedData){
      //   router.push("/dashboard/home/analyse")
      // }

    } catch (error) {
      console.error("Error:", error);
      // setError(error instanceof Error ? error.message : "Failed to analyze category");
    } finally {
      // setIsLoading(false);
    }
}
