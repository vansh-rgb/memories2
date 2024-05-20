export default (posts=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'DELETE':
           
           var newposts = posts;
           newposts=newposts.filter((post)=>post._id != action.payload);
           console.log(newposts);
           return newposts;
        case 'UPDATE':
           var ind = posts.findIndex((post)=>post._id === action.payload.id);
            newposts = posts;
           newposts[ind]=action.payload.data;
           console.log(newposts);
           return [...posts];
            
       
        case 'CREATE':
            return [...posts,action.payload];
        case 'LIKE':
            console.log(action.payload.username);
             ind = posts.findIndex((post)=>post._id === action.payload.id);
            newposts = posts;
           if( newposts[ind].likeCount.includes(action.payload.username)){
          
               newposts[ind].likeCount=newposts[ind].likeCount.filter((username)=>username!=action.payload.username);
           }
           else{
             
               newposts[ind].likeCount.push(action.payload.username);

           }
           console.log(newposts);
           return [...posts];
                
            
           
    
        default:
            return posts;
    }
}