import { Avatar, MainInfo, MainInfoContent, MainInfoText, Name, NickAndDate, PostBox, Image, Interactive, InteractiveBlock, Comments, Reposts, Likes, MainInfoContainer } from "./styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faComment, faRetweet, faHeart, faArrowDownLong} from '@fortawesome/free-solid-svg-icons';


function Post ({postsInfo}) {
    const {avatar, name, nickname, date, content, image, comments, reposts, likes} = postsInfo;

    return (
        <PostBox>
            <MainInfo>
                <Avatar src={avatar}/>
                <MainInfoContainer>
                    <MainInfoText>
                        <Name>{name}</Name>
                        <FontAwesomeIcon icon={faCircleCheck}/>
                        <NickAndDate>{nickname} • {date}</NickAndDate>
                    </MainInfoText>
                    <MainInfoContent>{content}</MainInfoContent>
                </MainInfoContainer>
            </MainInfo>

            <Image src={image}/>

            <Interactive>
                <InteractiveBlock>
                    <FontAwesomeIcon icon={faComment}/>
                    <Comments>{comments}</Comments>
                </InteractiveBlock>
                <InteractiveBlock>
                    <FontAwesomeIcon icon={faRetweet}/>
                    <Reposts>{reposts}</Reposts>
                </InteractiveBlock>
                <InteractiveBlock>
                    <FontAwesomeIcon icon={faHeart}/>
                    <Likes>{likes}</Likes>
                </InteractiveBlock>
                <InteractiveBlock>
                    <FontAwesomeIcon icon={faArrowDownLong}/>
                </InteractiveBlock>
            </Interactive>
        </PostBox>
    )
}

export default Post;