
 
let UseCors =()=>{
     return {
        // origin: "http://localhost:5173",
        origin: "https://myprojectadiyuvanbackend-production.up.railway.app",
        methods: ["GET", "POST", "PATCH", "PUT", "DELETE" ],
         allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    }
}
export {UseCors}
