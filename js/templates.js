var html = {
    phonebookView : "<div class='Phonebook form'>" +
                        "<div class='cb-header'>" +
                            "<h1>" +
                                "<i class='fa fa-plus-circle'></i> Add New Contact" +
                            "</h1>" +
                        "</div>" +
                        "<div class='row inputtxt'>" +
                            "<label class='inpholder'>" +
                                "<input type='text' id='name' class='input' autocomplete='off'>" +
                                "<span class='lagend'>Name</span>" +
                            "</label>" +
                        "</div>" +
                        "<div class='row inputtxt'>" +
                            "<label class='inpholder'>" +
                                "<input type='text' id='contact_no' class='input' autocomplete='off'>" +
                                "<span class='lagend'>Contact no</span>" +
                            "</label>" +
                        "</div>" +
                        "<div class='row inputbtn'>" +
                            "<button id='add' class='button'>Add Contact</button>" +
                        "</div>" +
                    "</div>",
    contactBookView:{
        mainView :"<table border='1' rules='all' cellpadding='6' class='table rows alignCenter'> " +
                        "<tbody>" +
                            "<tr>" +
                                "<th>Sr.</th>" +
                                "<th>Name</th>" +
                                "<th>Contact No</th>" +
                                "<th>Actions</th>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>",
        row : "<tr>" +
                "<td class='srno'></td>" +
                "<td class='cname'>" +
                    "<span class='val'></span>" +
                    "<input type='text' class='txedit' autocomplete='off'>" +
                "</td>" +
                "<td class='cnum'>" +
                    "<span class='val'></span>" +
                    "<input type='text' class='txedit' autocomplete='off'>" +
                "</td>" +
                "<td class='actions'>" +
                    "<button class='cmd edit'>" +
                        "<i class='fa fa-pencil'></i>" +
                    "</button>" +
                    "<button class='cmd update'>" +
                        "<i class='fa fa-save'></i>" +
                    "</button>" +
                    "<button class='cmd remove'>" +
                        "<i class='fa fa-trash'></i>" +
                    "</button>" +
                "</td>" +
            "</tr>"
    }
};