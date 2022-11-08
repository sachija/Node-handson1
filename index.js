const http=require('http')
const server= http.createServer((req,res)=>{
    if( req.url=== '/'){
        res.write("hello world")
        res.end();
    }

else if(req.url==='./api'){
    res.write(JSON.stringify(["pooja Thorat "]))
    res.end();
}
})
server.listen(3000,()=>{
console.log('App is running');
}
)