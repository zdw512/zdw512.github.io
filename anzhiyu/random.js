var posts=["2024/10/24/Untitled/","2024/10/24/在俩一次/","2024/10/23/hello-world/","2024/10/24/待送达/","2024/10/24/洒水/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };