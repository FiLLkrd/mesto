export default class UserInfo{
    constructor({nameSelector, jobSelector, avatarSelector}){
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    //определяем контент в профиле (имя, работа)
    getUserInfo(){
        return{
            name: this._name.textContent,
            job: this._job.textContent,
            
        }
    }

    handleAvatar(formValue) {
        this._avatar.style.backgroundImage = `url(${formValue.avatar})`;
      }

    //переназначаем значения профиля
    setUserInfo(formValue){
        this._name.textContent = formValue.name;
        this._job.textContent = formValue.job;
        this.handleAvatar(formValue);
    }
}