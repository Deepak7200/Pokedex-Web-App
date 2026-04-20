function useDebounce(cb, delay = 1000) { // cb (callBack) = " (e) => updateSearchTerm(e.target.value) "
    let timerId;
    return (...args) => { // args = [e]
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay)
    };
}
export default useDebounce;