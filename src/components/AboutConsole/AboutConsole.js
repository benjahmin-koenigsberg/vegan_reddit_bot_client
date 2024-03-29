import '../Console/Console.scss'
import "../CommentCard/CommentCard.scss"
import React from 'react'

export const AboutConsole = () => {
  return (
    <div className="console  about__console">
      <div className="commentCard__container">
        <div className="comment__container">
          <div className="comment__container--labels">Vegan Reddit Troll</div>
          <div className="comment__element--comment">
            <h5>
              The vegan reddit troll bot is an application to monitor incoming
              posts for specified keywords about animal consumption to auto
              respond with facts about non human animal sentience and
              personhood
            </h5>
          </div>
        </div>
        <div className="comment__container">
          <div className="comment__container--labels">Instructions</div>
          <div className="comment__element--comment">
            <h5>
              Click on the reddit logo to shuffle thru posts the bot has scanned
              <br />
              Click on the message icon to see the bot's recent replies
              Click on a message to see it live on Reddit
            </h5>
          </div>
        </div>

        <div className="comment__container">
          <div className="comment__container--labels">What is speciesism?</div>
          <div className="comment__element--comment">
            <h5>
              Speciesism is a misguided belief that one species is more
              important than another. This toxic mindset is deeply ingrained in
              our society, and it results in all kinds of negative consequences.
            </h5>
          </div>
        </div>

        <div className="comment__container">
          <div className="comment__container--labels">What is carnism?</div>
          <div className="comment__element--comment">
            <h5>
              Carnism is the invisible belief system that conditions people to
              eat certain animals. Carnism is essentially the opposite of
              veganism.
            </h5>
          </div>
        </div>

        <div className="comment__container">
          <div className="comment__container--labels">
            # of Animals die for food in the United States every day
          </div>
          <div className="comment__element--title">
            <h1>Over 23,000,000</h1>
          </div>
        </div>

        <div className="comment__container">
          <div className="comment__container--labels">
            Every day vegans spare....
          </div>
          <div className="comment__element--comment">
            <h2>1 life</h2>
          </div>
        </div>

        <div className="comment__container">
          <div className="comment__container--labels">Tech stack</div>
          <div className="comment__element--comment">
            <h5>
              <h5>
                Reddit API, Node.js, Express.js, Snoowrap.js, Snoostorm.js,
                Sockets.io and React.js
              </h5>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
