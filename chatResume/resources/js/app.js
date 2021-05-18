var botui = new BotUI('my-bot');

botui.message.bot({
    delay: 500,
    loading: true,
    content: 'Hi There! 🖐'
}).then(function() {
    botui.message.bot({
        delay: 1000,
        loading: true,
        content: "My name is Kishlay Kumar and I'm from India 🇮🇳"
    }).then(function() {
        botui.message.bot({
            delay: 1000,
            loading: true,
            content: '..and I look weird as this 🤓![my-image](./resources/images/kishlay_kumar.jpg)'
        }).then(function() {
            botui.message.bot({
                delay: 1000,
                loading: true,
                content: "I'm a B.Tech Student pursuing Electronics and Communication Engineering"
            }).then(function (){
                botui.message.bot({
                    content: "![neu](./resources/images/VitUniversity.jpeg)"
                }).then(function () {
                botui.message.human({
                    delay: 1000,
                    loading: true,
                    content: "Woah! What about the skills!"
                }).then(function() {
                    botui.message.bot({
                        delay: 1000,
                        loading: true,
                        content: "I love to explore new tech skills 📖 ![study](./resources/images/study.gif)"
                    }).then(function() {
                        botui.message.bot({
                            delay: 1000,
                            loading: true,
                            content: "So My skills include Core Java,MERN stack developer,React Native ,DataScience,Cloud Computing,System Design and OS,DBMS,OOPS"
                        }).then(function() {
                            botui.message.bot({
                                delay: 1000,
                                loading: true,
                                content: "You can check my GitHub Profile 👉 [here](http://github.com/neptunespear)^"
                            }).then(function() {
                                botui.message.human({
                                    delay: 1000,
                                    loading: true,
                                    content: "Impressive 👏 What else you like to do ?"
                                }).then(function () {
                                    botui.message.bot({
                                        delay: 1000,
                                        loading: true,
                                        content: "I like to program cool things 👨‍💻like this bot 🤖 and..."
                                    }).then(function() {
                                        botui.message.bot({
                                            delay: 1000,
                                            loading: true,
                                            content: "love to play badminton 🏸 and play chess "
                                        }).then(function() {
                                            botui.message.human({
                                                delay: 1000,
                                                loading: true,
                                                content: "Great! You seem to be a cool guy 👌 but how can I contact you ?"
                                            }).then(function() {
                                                botui.message.bot({
                                                    delay: 1000,
                                                    loading: true,
                                                    content: "Sure! You can !(phone) on [7717762296](tel:+917717762296)"
                                                })
                                                botui.message.bot({
                                                    delay: 1500,
                                                    content: "!(envelope) me at [kishlay7717@gmail.com](mailto:kishlay7717@gmail.com)^"
                                                })
                                                botui.message.bot({
                                                    delay: 2000,
                                                    content: "or you can connect with me on !(linkedin-square) 👉 [here](https://www.linkedin.com/in/kishlay-kumar-409193173/)^"
                                                }).then(function() {
                                                    botui.message.human({
                                                        delay: 1000,
                                                        loading: true,
                                                        content: "Perfect! 👍"
                                                    }).then(function() {
                                                        botui.message.bot({
                                                            delay: 1000,
                                                            loading: true,
                                                            content: "Looking forward to hearing from you soon 🙂"
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});