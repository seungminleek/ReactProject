import { observable, action } from 'mobx';

// @autobind
class LoginStore {
	
  // 값들에 'observable'로 표시함으로써 'observers'에 의해 관찰됩니다.
    @observable session = {
		id:"",
		pw:"",
		info:"user"
	};

	@action changeSession(name, value) {
		this.session = {
			...this.session,
			[name]:value
		};
	};
    // @computed get selectedId() { return this.selectedUser.id; }

    // @action setUsers = (users) => { this.users = [...users]; }
    // @action selectUser = (user) => { this.selectedUser = user; }
}

// const loginStore = new LoginStore();

export default LoginStore;
