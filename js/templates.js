var html = {
    phonebookView : "<div class='pb-form form'>" +
                        "<div class='cb-header'>" +
                            "<h1>" +
                                "<i class='fa fa-plus-circle'></i> Add New Contact" +
                            "</h1>" +
                        "</div>" +
                        "<section class='group-wrap'>" +
                            "<div class='set-group clearfix'>" +
                                "<label class='group-lbl'>Summery Information</label>" +
                                "<div class='row-wrap'>" +
                                    "<div class='row input-field'>" +
                                        "<div class='gWrap clearfix'>" +
                                            "<label class='inpholder'>" +
                                                "<input type='text' id='name' class='input' autocomplete='off'>" +
                                                "<span class='lagend'>Name</span>" +
                                            "</label>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='row input-field'>" +
                                        "<div class='gWrap clearfix'>" +
                                            "<div class='g2 fl'>" +
                                                "<label class='inpholder'>" +
                                                    "<input type='text' id='contact_no' class='input' autocomplete='off'>" +
                                                    "<span class='lagend'>Code</span>" +
                                                "</label>" +
                                            "</div>" +
                                            "<div class='g10 fl'>" +
                                                "<label class='inpholder'>" +
                                                    "<input type='text' id='contact_no' class='input' autocomplete='off'>" +
                                                    "<span class='lagend'>Contact no</span>" +
                                                "</label>" +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                            "<div class='set-group clearfix'>" +
                                "<label class='group-lbl'>Work Information</label>" +
                                "<div class='row-wrap'>" +
                                    "<div class='row input-field'>" +
                                        "<div class='gWrap clearfix'>" +
                                            "<label class='inpholder'>" +
                                                "<input type='text' id='cn' class='input' autocomplete='off'>" +
                                                "<span class='lagend'>Company Name</span>" +
                                            "</label>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='row input-field'>" +
                                        "<div class='gWrap clearfix'>" +
                                            "<label class='inpholder'>" +
                                                "<input type='text' id='jt' class='input' autocomplete='off'>" +
                                                "<span class='lagend'>Job title</span>" +
                                            "</label>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='row input-field'>" +
                                        "<div class='gWrap clearfix'>" +
                                            "<label class='inpholder'>" +
                                                "<input type='text' id='w-mb' class='input' autocomplete='off'>" +
                                                "<span class='lagend'>Mobile</span>" +
                                            "</label>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='row input-field'>" +
                                        "<div class='gWrap clearfix'>" +
                                            "<label class='inpholder'>" +
                                                "<input type='text' id='w-site' class='input' autocomplete='off'>" +
                                                "<span class='lagend'>Website</span>" +
                                            "</label>" +
                                        "</div>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</section>" +
                        "<div class='inputbtn'>" +
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