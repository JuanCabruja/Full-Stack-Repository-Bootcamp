import { useEffect } from "react";



function useFetch(url, setState) {
useEffect(() => {
fetch(url)
.then(response => response.json())
.then(data => setState(data.slice(0, 20)));
}, []);
}

export {useFetch};