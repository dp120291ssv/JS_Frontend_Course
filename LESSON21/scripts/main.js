$(() => {
    const CONTACTS_URL = 'http://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts';
    const $contactsList = $('#contactList');
    const $contactTemplate = $('#contactTemplate').html();
    const $dialogInput = $('.dialog__input');
    const $addContact = $('#addBtn');
    const $contactForm = $('#contactForm');
    const $dialog = $('#dialogForm').dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            Save: () => {
                saveOrCreateContact();
                $dialog.dialog('close');
            },
            Cancel: () => $dialog.dialog('close'),
        },
        close: function () {
            resetForm();
        },
    });
    let listOfContactsEl = [];

    $addContact.on('click', () => openModal(getEmptyContact()));
    $contactsList.on('click', '.edit-btn', onEditBtnClick);
    $contactsList.on('click', '.delete-btn', onDeleteBtnClick);
    $contactForm.on('submit', (e) => saveOrCreateContact());

    init();

    function createContact(contact) {
        fetch(`${CONTACTS_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        })
            .then((res) => res.json())
            .then((contact) => {
                listOfContactsEl.push(contact);
                $contactsList.append(getContactHtml(contact));
            });
    }

    function updateContact(contact) {
        fetch(`${CONTACTS_URL}/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        });

        listOfContactsEl = listOfContactsEl.map((item) => (item.id == contact.id ? contact : item));
        getContactElement(contact.id).replaceWith(getContactHtml(contact));
    }

    function deleteContact(id) {
        fetch(`${CONTACTS_URL}/${id}`, {
            method: 'DELETE',
        });
        getContactElement(id).remove();
    }

    function init() {
        getData().then(setData).then(renderData);
    }

    function onEditBtnClick(e) {
        const id = getContactId(e.target);
        editContact(id);
    }

    function onDeleteBtnClick(e) {
        const id = getContactId(e.target);
        deleteContact(id);
    }

    function getContactId(el) {
        return $(el).closest('.contact-row').data('id');
    }

    function getContactElement(id) {
        return $contactsList.find(`[data-id="${id}"]`);
    }

    function getContact(id) {
        return listOfContactsEl.find((item) => item.id == id);
    }

    function editContact(id) {
        openModal(getContact(id));
    }

    function getData() {
        return fetch(CONTACTS_URL).then((res) => res.json());
    }

    function setData(data) {
        return (listOfContactsEl = data);
    }

    function renderData(data) {
        const html = data.map(getContactHtml).join('\n');
        $contactsList.html(html);
    }

    function getContactHtml(contact) {
        return $contactTemplate
            .replace('{{id}}', contact.id)
            .replace('{{name}}', contact.name)
            .replace('{{surname}}', contact.surname)
            .replace('{{phone}}', contact.phone)
    }

    function openModal(contact) {
        fillForm(contact);
        $dialog.dialog('open');
    }

    function getEmptyContact() {
        return {
            id: '',
            name: '',
            surname: '',
            phone: '',
        };
    }

    function fillForm(contact) {
        $dialogInput.each((i, el) => {
            el.value = contact[el.name];
        });
    }

    function getFormData() {
        let contact = {};
        $dialogInput.each((i, el) => {
            contact[el.name] = el.value;
        });
        return contact;
    }

    function saveOrCreateContact() {
        const contact = getFormData();
        if (contact.id) {
            updateContact(contact);
        } else {
            createContact(contact);
        }
    }

    function resetForm() {
        $dialogInput.val('');
    }
});
