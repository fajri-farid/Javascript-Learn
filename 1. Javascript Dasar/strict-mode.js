function useStrictMode() {
  "use strict"; // penanda dia strict mode
  // klw strict mode di matikan with tidak eror

  const person = {
    firstName: "Eko",
  };

  with (person) {
    // dalam strict mode tidak boleh ada "with"
    console.info(firstName);
  }
}

useStrictMode();
