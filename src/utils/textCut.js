export default (word) => {
    if(word.length > 16){
        return word.slice(0, 15) + '...';
    }
    return word;
}