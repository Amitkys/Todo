fetch('http://localhost:3000/todo')
.then(async (res) => {
    const result = await res.json();
    console.log(result);
})