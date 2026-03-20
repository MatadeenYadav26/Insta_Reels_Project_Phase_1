const reels = [
  {
    username: "aman.yadav",
    likes: 12450,
    isLiked: true,
    comments: 320,
    caption: "Consistency > Motivation 💪 #gym #discipline",
    video: "./reel/1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/1.jpg",
    shares: 210,
    isFollowed: true
  },
  {
    username: "fit.with.raj",
    likes: 8932,
    isLiked: false,
    comments: 210,
    caption: "Leg day hits different 😤🔥",
    video: "./reel/2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/2.jpg",
    shares: 140,
    isFollowed: false
  },
  {
    username: "travel.diaries",
    likes: 15432,
    isLiked: true,
    comments: 500,
    caption: "Lost in the mountains 🏔️❤️",
    video: "./reel/3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/3.jpg",
    shares: 350,
    isFollowed: true
  },
  {
    username: "codewithme",
    likes: 6789,
    isLiked: false,
    comments: 98,
    caption: "Day 10 of learning JavaScript 🚀",
    video: "./reel/4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/4.jpg",
    shares: 60,
    isFollowed: false
  },
  {
    username: "foodie.vibes",
    likes: 22340,
    isLiked: true,
    comments: 870,
    caption: "Street food in Ahmedabad 😍🔥",
    video: "./reel/5.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/5.jpg",
    shares: 500,
    isFollowed: true
  },
  {
    username: "daily.memes",
    likes: 31200,
    isLiked: false,
    comments: 1200,
    caption: "Relatable or not? 😂",
    video: "./reel/6.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/6.jpg",
    shares: 800,
    isFollowed: false
  },
  {
    username: "nature.lens",
    likes: 11200,
    isLiked: true,
    comments: 430,
    caption: "Peace in nature 🌿✨",
    video: "./reel/7.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/7.jpg",
    shares: 260,
    isFollowed: true
  },
  {
    username: "startup.grind",
    likes: 5400,
    isLiked: false,
    comments: 75,
    caption: "Building something big 🚀",
    video: "./reel/8.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/8.jpg",
    shares: 45,
    isFollowed: false
  },
  {
    username: "dance.moves",
    likes: 27890,
    isLiked: true,
    comments: 980,
    caption: "Trending steps 💃🔥",
    video: "./reel/9.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/9.jpg",
    shares: 670,
    isFollowed: true
  },
  {
    username: "tech.updates",
    likes: 9100,
    isLiked: false,
    comments: 150,
    caption: "AI is changing everything 🤖",
    video: "./reel/10.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/10.jpg",
    shares: 120,
    isFollowed: false
  }
];

var sum = ''

reels.forEach(function(elem){
    // console.log(elem);
    sum =sum + `<div class="reel">
                                <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}"alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?"UnFollow":"Follow"}</button>
                        </div>
                        <h3>${elem.caption}
                        </h3>
                    </div>
                    <div class="right">
                       <div class="like">
                        <h4 class="like-icon icon">${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likes}</h6>
                       </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"> <i class="ri-chat-3-line"></i> </h4>
                            <h6>${elem.comments}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"> <i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shares}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"> <i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

var allReels = document.querySelector('.all-reels')

allReels.innerHTML = sum
