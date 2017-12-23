//
Function.prototype.ext = function (Obj) {
    for (var proto in Obj) {
        this.prototype[proto] = Obj[proto];
    }
}

Function.prototype.inherit = function (parentFun) {
    this.prototype = Object.create(parentFun.prototype);
}

function phoneBook(phonebook_holder) {
    this.view(phonebook_holder);
    this.contactBook = new contactBook(this);
}

phoneBook.ext({
    view: function (phonebook_holder) {
        this.view = $(html.phonebookView);
        $(phonebook_holder).append(this.view);
        this.controller(); // bind events
    },
    controller: function () {
        var _this = this;
        this.view.find("#add").click(function () {
            var data = {
                name: _this.view.find("#name").val(),
                contact: _this.view.find("#contact_no").val()
            }
            if(data.name && data.contact){
                if (_this.contactBook.contacts.length == 0) {
                    _this.contactBook.bookView();
                }
                _this.contactBook.addContact(data.name, data.contact);
                _this.view.find(".input").val("").blur();
            }
        });
        this.view.find(".input-field .input").focus(function () {
            $(this).addClass("focusTxt");
        }).blur(function () {
            if (this.value == "") $(this).removeClass("focusTxt");
        });

        this.view.find("#contact_no").keypress(function (e) {
            var key = String.fromCharCode(e.charCode);
            return !isNaN(key);
        });
    }
});

function contactBook(phoneBook) {
    this.phoneBook = phoneBook;
    this.contacts = [];
    this.contact = contact;
}

contactBook.ext({
    addContact: function (name, contact_no) {
        new this.contact(this, name, contact_no);
    },
    bookView: function () {
        if (this.view == undefined) {
            this.view = $(html.contactBookView.mainView);
            this.phoneBook.view.append(this.view);
        }
    }
});

function contact(contactBook, name, contact_no) {
    this.contactBook = contactBook;
    this.add(name, contact_no);
}

contact.ext({
    contactView: function () {
        this.view = $(html.contactBookView.row);
        this.contactBook.view.find("tbody").append(this.view);
        this.contactController();
        this.putVal();
    },
    putVal: function (forupdate) {
        this.view.find(".srno").html(this.srno);
        this.view.find(".cname .val").html(this.name);
        this.view.find(".cname .txedit").val(this.name);
        this.view.find(".cnum .val").html(this.contact_no);
        this.view.find(".cnum .txedit").val(this.contact_no);
    },
    contactController: function () {
        var _this = this;
        this.view.find(".remove").click(function () {
            _this.remove();
        });
        this.view.find(".edit").click(function () {
            _this.edit();
        });
        this.view.find(".update").click(function () {
            var data = {
                name: _this.view.find(".cname .txedit").val(),
                contact: _this.view.find(".cnum .txedit").val()
            }
            _this.update(data.name, data.contact);
        });
    },
    add: function (name, contact_no) {
        this.name = name;
        this.contact_no = contact_no;  
        if (this.validate()) {
            this.contactBook.contacts.push(this);
            this.srno = this.contactBook.contacts.length;
            this.contactView();
        }
    },
    update: function (name, contact_no) {
        this.name = name;
        this.contact_no = contact_no;
        if (this.validate()) {
            this.view.removeClass("editable");
            this.putVal(true);
        }
    },
    edit: function () {
        this.view.addClass("editable").find(".cname .txedit").focus().select();
    },
    remove: function () {
        this.view.remove();
        for (var c = 0; c < this.contactBook.contacts.length; c++) {
            if (this == this.contactBook.contacts[c]) {
                this.contactBook.contacts.splice(c, 1);
                this.resetSrNo(c);
                break;
            }
        }
    },
    validate: function () {
        if (this.name != "" && this.contact_no != "") return true;
        else return false;
    },
    resetSrNo: function(i){
        var contacts = this.contactBook.contacts;
        for(var i=i; i<contacts.length;i++){
            contacts[i].view.find(".srno").html(contacts[i].srno -= 1);
        }
        
    }
});