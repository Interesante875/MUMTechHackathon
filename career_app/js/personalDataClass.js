'use strict';

class Profile{
    constructor(isPersonal = true, isUniversity = false, isOrganization = false,
        typeOfProfile = '', dateCreated = new Date(), visibility = true, 
        introduction = '', activityFeeds = null, isBanned = false, bannedPeriod = null){
            this._isPersonal = isPersonal;
            this._isUniversity = isUniversity;
            this._isOrganization = isOrganization;
            this._typeOfProfile = typeOfProfile;
            this._dateCreated = dateCreated;
            this._visibility = visibility;
            this._introduction = introduction;
            this._activityFeeds = activityFeeds;
            this._isBanned = isBanned;
            this._bannedPeriod = bannedPeriod;
        }
}

class StudentProfile extends Profile{
    constructor(isPersonal = true, isUniversity = false, isOrganization = false,
        typeOfProfile = '', dateCreated = new Date(), visibility = true, 
        introduction = '', activityFeeds = null, isBanned = false, bannedPeriod = null,
        dateOfBirth = new Date(), gender = null, age = null, skillList = null, labelList = null,
        description = '', subscription = null, jobApplicationList = null, cv = new CurriculumVitae()){
        super(isPersonal, isUniversity, isOrganization,
            typeOfProfile, dateCreated, visibility, 
            introduction, activityFeeds, isBanned, bannedPeriod);
        this._dateOfBirth = dateOfBirth;
        this._gender = gender;
        this._age = age;
        this._skillList = skillList;
        this._labelList = labelList;
        this._description = description;
        this._subscription = subscription;
        this._jobApplicationList = jobApplicationList;
        this._cv = cv;
    }
}

class OrganizationProfile extends Profile{
    constructor(isPersonal = true, isUniversity = false, isOrganization = false,
        typeOfProfile = '', dateCreated = new Date(), visibility = true, 
        introduction = '', activityFeeds = null, isBanned = false, bannedPeriod = null,
        organizationalContactInfo = new OrganizationContactInfo(), domain = '', 
        labelList = null, description = '', availableApplicationList = null){
        super(isPersonal, isUniversity, isOrganization,
            typeOfProfile, dateCreated, visibility, 
            introduction, activityFeeds, isBanned, bannedPeriod);
        
            this._organizationalContactInfo = organizationalContactInfo;
            this._domain = domain;
            this._labelList = labelList;
            this._description = description;
            this._availableApplicationList = availableApplicationList;
        }
}

class ContactInfo{
    constructor(name = '', introduction = ''){
        this._name = name;
        this._introduction = introduction;
    }

}

class PersonalContactInfo extends ContactInfo{
    constructor(name = '', introduction = '', profileList = null, mobilePhone = '',
    homePhone = '', personalEmailAddress = '', workEmailAddress = '', firstName = '',
    lastName = '', middleName = '', prefix = '', suffix = '', organization = ''){
        super(name, introduction);
        this._profileList = profileList;
        this._mobilePhone = mobilePhone;
        this._homePhone = homePhone;
        this._personalEmailAddress = personalEmailAddress;
        this._workEmailAddress = workEmailAddress;
        this._firstName = firstName;
        this._lastName = lastName;
        this._middleName = middleName;
        this._prefix = prefix;
        this._suffix = suffix;
        this._organization = organization;
    }

    
}

class OrganizationContactInfo extends ContactInfo{
    constructor(name = '', introduction = '', organizationPhone = '', organizationEmail = '',
        organizationAddress = new Address(), personInCharge = ''){
        super(name, introduction)
        this._website = website;
        this._organizationPhone = organizationPhone;
        this._organiztionEmail = organizationEmail;
        this._organizationAddress = organizationAddress;
        this._personInCharge = personInCharge;
    }

}

class Address{
    constructor(name, streetNumber, streetName, region, postalCode, city, state, country){
        this._name = name;
        this._streetNumber = streetNumber;
        this._streetName = streetName;
        this._region = region;
        this._postalCode = postalCode;
        this._city = city;
        this._state = state;
        this._country = country;
    }
}

class CurriculumVitae{
    constructor(personalContactInfo, studentProfile){
        this._personalContactInfo = personalContactInfo;
        this._studentProfile = studentProfile;
    }
}