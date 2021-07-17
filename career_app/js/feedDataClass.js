'use strict';

class EventStatus{
    constructor(begin, end = null, status){
        this._begin = begin;
        this._end = end;
        this._status = status;
    }

    get startingTime(){
        return this._begin;
    }

    get endingTime(){
        return this._end;
    }

    get status(){
        return this._status;
    }

    set startingTime(time){
        if (time instanceof Date){
            if (time.valueOf() > new Date().valueOf()){
                this._begin = time;
            }else{
                console.log("The time is not valid!");
            }
        }else{
            console.log("It is not a Date object.");
        }
    }

    set endingTime(time){
        if (time instanceof Date){
            if (time.valueOf() > new Date().valueOf() && time.valueOf() > this._begin.valueOf()){
                this._end = time;
            }else{
                console.log("The time is not valid!")
            }
        }else{
            console.log("It is not a Date object.");
        }
    }

    set status(stat){
        if (status.toLowerCase() == "soon coming" || this.status.toLowerCase() == "ongoing" ||
        status.toLowerCase() == "ended"){
            this._status = stat;
        }
    }

    fromData(eventStatusObj){
        this._begin = eventStatusObj._begin;
        this._end = eventStatusObj._end;
        this._status = eventStatusObj._status;
    }

}

class EventList{
    constructor(events = null){
        this._events = events;
    }

    get events(){
        return this._events;
    }

    addEvents(event){
        if (event instanceof JobOffering || event instanceof JobFair || event instanceof CareerService){
            this._events.push(event);
        }else{
            console.log('The input event is not valid!');
        }
    }

    removeEvents(nameOfEvent = '', index = -1){
        if (nameOfEvent == '' && index <= -1){
            return;
        }
        if (this._events != null && this._events != undefined && this._events.length > 0){
            if (index == -1 && index >= -1){
                for (let i = 0; i < this._events.length; i++){
                    if (this._events[i].name == "nameOfEvent"){
                        this._events.splice(i, 1);
                        return;
                    }
                }
            }else{
                if (index < this._events.length){
                    this._events.splice(index, 1);
                }else{
                    return;
                }
            }
        }else{
            return;
        }

        return;
    }

    sortByDate(ascending = true){
        if (this._events != null && this._events != undefined && this._events.length > 1){
            if (ascending){
                this._events = this._events.sort(
                    (first, second) => first.startingTime.valueOf() - second.startingTime.valueOf());
            }else{
                this._events = this._events.sort(
                    (first, second) => second.startingTime.valueOf() - first.startingTime.valueOf());
            }
        }

        return;
    }

    sortByName(ascending = true){
        if (this._events != null && this._events != undefined && this._events.length > 1){
            if (ascending){
                this._events = this._events.sort(
                    (first, second) => first.name.charCodeAt(0) - second.name.charCodeAt(0));
            }else{
                this._events = this._events.sort(
                    (first, second) => second.startingTime.charCodeAt(0) - first.startingTime.charCodeAt(0));
            }
        }
        return;
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

    get name(){
        return this._name;
    }

    get startingTime(){
        return this._status.startingTime;
    }

    set address(addressInstance){
        if (addressInstance instanceof Address){
            this._address = addressInstance;
        }
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
    constructor(applicantsProfile, experience, address, contactInfo, refPhone, refName, refEmail, pitch = ""){
        this._applicatnsProfile = applicantsProfile;
        this._experience = experience;
        this._address = address;
        this._contactInfo = contactInfo;
        this._refPhone = refPhone;
        this._refName = refName;
        this._refEmail = refEmail;
        this._pitch = pitch;
    }
}