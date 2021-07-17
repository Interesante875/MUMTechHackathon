'use strict';

class EventStatus{
    constructor(begin, end = null, status){
        this._begin = begin;
        this._end = end;
        this._status = status;
    }

}

class Events{
    constructor(name, organizer, skillsList = null, labelList = null,
        description = '', address = new Address(), contactInfo, application, 
        applicantsList = null, status, dateCreated = new Date()){
        this._name = name;
        this._organizer = organizer;
        this._skillsList = skillsList;
        this._labelList = labelList;
        this._description = description;
        this._address = address;
        this._contactInfo = contactInfo;
        this._application = application;
        this._applicantsList = applicantsList;
        this._status = status;
        this._dateCreated = dateCreated;
    }
}

class JobOffering extends Events{
    constructor(jobTitle, recruitingCompany, experience = '', skillsList = null, labelList = null,
        salary = [0, 0], description = '', address = new Address(), contactInfo, application, 
        applicantsList = null, status, dateCreated = new Date(), type){
        super(jobTitle, recruitingCompany, skillsList, labelList,
            description, address, contactInfo, application, 
            applicantsList, status, dateCreated);
        this._experience = experience;
        this._salary = salary;
        this._type = type;
    }

}

class JobFair extends Events{
    constructor(fairName, organizer, skillsList = null, labelList = null,
        description = '', address = new Address(), contactInfo, application, 
        applicantsList = null, status, dateCreated = new Date()){
        super(fairName, organizer, skillsList, labelList,
            description, address, contactInfo, application, 
            applicantsList, status, dateCreated);
    }
}

class CareerService extends Events{
    constructor(serviceName, organizer, skillsList = null, labelList = null,
        description = '', address = new Address(), contactInfo, application, 
        applicantsList = null, status, dateCreated = new Date()){
        super(serviceName, organizer, skillsList, labelList,
            description, address, contactInfo, application, 
            applicantsList, status, dateCreated);
    }
}

class Feed{
    constructor(title, caption = '', contents = '', owner, pictureList = null,
        labelList = null, feedTargetGroupList = null, numOfLikes = 0, numOfShares = 0,
        numOfComments = 0, commentSection = new CommentSection()){
        this._title = title;
        this._caption = caption;
        this._contents = contents;
        this._owner = owner;
        this._pictureList = pictureList;
        this._labelList = labelList;
        this._feedTargetGroupList = feedTargetGroupList;
        this._numOfLikes = numOfLikes;
        this._numOfShares = numOfShares;
        this._numOfComments = numOfComments;
        this._commentSection = commentSection;
    }

}

class JobOfferingFeed extends Feed{
    constructor(title, caption = '', contents = '', owner, pictureList = null,
        labelList = null, feedTargetGroupList = null, numOfLikes = 0, numOfShares = 0,
        numOfComments = 0, commentSection = new CommentSection(), jobOffering){
        super(title, caption, contents, owner, pictureList,
        labelList, feedTargetGroupList, numOfLikes, numOfShares,
        numOfComments, commentSection);
        this._jobOffering = jobOffering;
    }

}

class JobFairFeed{
    constructor(title, caption = '', contents = '', owner, pictureList = null,
        labelList = null, feedTargetGroupList = null, numOfLikes = 0, numOfShares = 0,
        numOfComments = 0, commentSection = new CommentSection(), jobFair){
        super(title, caption, contents, owner, pictureList,
        labelList, feedTargetGroupList, numOfLikes, numOfShares,
        numOfComments, commentSection);
        this._jobFair = jobFair;
    }

}

class CareerServiceFeed{
    constructor(title, caption = '', contents = '', owner, pictureList = null,
        labelList = null, feedTargetGroupList = null, numOfLikes = 0, numOfShares = 0,
        numOfComments = 0, commentSection = new CommentSection(), careerService){
        super(title, caption, contents, owner, pictureList,
        labelList, feedTargetGroupList, numOfLikes, numOfShares,
        numOfComments, commentSection);
        this._careerService = careerService;
    }
}

class Application{
    constructor(applicantsProfile = new StudentProfile()){
        this._applicatnsProfile = applicantsProfile;
    }
}