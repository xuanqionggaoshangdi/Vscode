const posts = [
    {
        title: "当书籍开始反思他们的读者",
        author: "剑来",
        date: "2024-12-13",
        content: "想象一下，如果书本有意识，它们会对我们这些“翻页狂人”说些什么？比如，《战争与和平》可能会嘲笑：“你居然在这本书上花了一个月，却没能记住任何角色的名字！”而《百年孤独》可能会说：“孤独是我，但你居然能把我放在书架上三年不翻！”"
    },
    {
        title: "如何以“读书”为名，巧妙躲避社会活动",
        author: "想谈一场一部到墓的恋爱",
        date: "2024-12-14",
        content: "每当朋友邀请我出去聚会时，我总能淡定地回答：“抱歉，我正在读一本非常重要的书。”其实我只是想躺在沙发上看手机。读书的真正魅力在于它能让我在家里“社交”——与书页对话，甚至与书虫们共舞！"
    },
    {
        title: "灵异复苏流小说推荐",
        author: "d",
        date: "2024-12-9",
        content: "《神秘复苏》关于鬼怪的描述很令我叹为观止，还有，对于民国那段时期的鬼怪还有驭鬼者犹抱琵琶半遮面的叙述很令人心动。我几乎做梦都想知道那段时间具体发生了什么，而且还想借鉴那个写同人，不过后来因为想象力匮乏放弃了。里面还有很多故事明明可以深挖的，我当时觉得很可惜，也知道是魂环毁灭了这一切。但我不甘心。于是四处去搜罗作者可能流落出来的关于没有被整顿前的想法。好像有个大纲来着。当时看了，真的觉得很可惜。恨死亡妻魂环。"
    
    },
    {
        title: "哲学的启蒙之旅",
        author: "银河",
        date: "2024-12-7",
        content: "梳理乔斯坦·贾德的《苏菲的世界》中的哲学思想，讲述主人公如何通过神秘的信件和哲学家们的对话，逐步认识世界的本质。讨论书中涉及的主要哲学流派和思想，以及它们对个人思考和人生观的影响。"
    },
    {
        title: "《思考，快与慢》：人类思维的双重系统",
        author: "AIR",
        date: "2024-12-7",
        content: "解读丹尼尔·卡尼曼在《思考，快与慢》中提出的两种思维模式——快速直觉与缓慢理性。探讨这两种思维在决策过程中的作用，以及如何通过理解这些思维模式来提升我们的判断力和决策能力。"
    },
    {
        title: "《小王子》：寻找生命的意义",
        author: "理想国",
        date: "2024-12-7",
        content: "回顾安托万·德·圣埃克苏佩里的《小王子》，分析书中关于爱、孤独和人际关系的深刻寓意。探讨小王子的旅程如何引导我们反思成年人世界的复杂性，以及如何保持内心的纯真与对生活的热爱。"
    },

];

function displayPosts() {
    const postList = document.getElementById('post-list');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        postElement.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-meta">用户: ${post.author} | 日期: ${post.date}</div>
            <div class="post-content">${post.content.substring(0, 100)}...</div>
        `;
        
        postList.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', displayPosts);