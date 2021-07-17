'use strict';

class Forum{
    constructor(numOfActiveMembers = 0, categoryList = null){
        this._numOfActiveMembers = numOfActiveMembers;
        this._categoryList = categoryList;
    }
}

class Category{
    constructor(name, mods, dateCreated = new Date(), discussionList = null,
        memberList = null, numOfMembers, numOfDiscussion = 0, visibility = true){
            this._name = name;
            this._mods = mods;
            this._dateCreated = dateCreated;
            this._dicussionList = discussionList;
            this._memberList = memberList;
            this._numOfMembers = numOfMembers;
            this._numOfDiscussion = numOfDiscussion;
            this._visibility = visibility;
    }

}

class Discussion{
    constructor(title, caption = '', content = '', pictureList = null, isSensitive = false, dateCreated = new Date(),
        visibility = true, commentSection = new CommentSection(), numOfLikes = 0, numOfComments = 0){
            this._title = title;
            this._caption = caption;
            this._content = content;
            this._pictureList = pictureList;
            this._isSensitive = isSensitive;
            this._dateCreated = dateCreated;
            this._visibility = visibility;
            this._commentSection = commentSection;
            this._numOfLikes = numOfLikes;
            this._numOfComments = numOfComments;
    }

}

class Comment{
    constructor(content = '', pictureList = null, isSensitive = false, dateCreated = new Date(),
        visibility = true, commentSection = new CommentSection(), numOfLikes = 0){
            this._content = content;
            this._pictureList = pictureList;
            this._isSensitive = isSensitive;
            this._dateCreated = dateCreated;
            this._visibility = visibility;
            this._numOfLikes = numOfLikes;
    }

}

class CommentSection{
    constructor(commentList = null, visibility = true){
        this._commentList = commentList;
        this._visibility = visibility;
    }

}