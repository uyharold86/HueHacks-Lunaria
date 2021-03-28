import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '.../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import MyPopup from '../util/MyPopup';


function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, likes}}){
    const { user } = useContext(AuthContext);




export default PostCard;