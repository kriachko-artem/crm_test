const data = [
   {
      "customerName": "Jane Cooper",
      "company": "Microsoft",
      "phoneNumber": "(225) 555-0118",
      "email": "Jane@microsoft.com",
      "country": "United States",
      "status": "Active"
   },
   {
      "customerName": "Floyd Miles",
      "company": "Yahoo",
      "phoneNumber": "(205) 555-0100",
      "email": "floyd@yahoo.com",
      "country": "Kiribati",
      "status": "Inactive"
   },
   {
      "customerName": "Ronald Richards",
      "company": "Adobe",
      "phoneNumber": "(302) 555-0107",
      "email": "ronald@adobe.com",
      "country": "Israel",
      "status": "Inactive"
   },
   {
      "customerName": "Marvin McKinney",
      "company": "Tesla",
      "phoneNumber": "(252) 555-0126",
      "email": "marvin@tesla.com",
      "country": "Iran",
      "status": "Active"
   },
   {
      "customerName": "Jerome Bell",
      "company": "Google",
      "phoneNumber": "(629) 555-0129",
      "email": "jerome@google.com",
      "country": "Réunion",
      "status": "Active"
   },
   {
      "customerName": "Kathryn Murphy",
      "company": "Microsoft",
      "phoneNumber": "(406) 555-0120",
      "email": "kathryn@microsoft.com",
      "country": "Curaçao",
      "status": "Active"
   },
   {
      "customerName": "Jacob Jones",
      "company": "Yahoo",
      "phoneNumber": "(208) 555-0112",
      "email": "jacob@yahoo.com",
      "country": "Brazil",
      "status": "Active"
   },
   {
      "customerName": "Kristin Watson",
      "company": "Facebook",
      "phoneNumber": "(704) 555-0127",
      "email": "kristin@facebook.com",
      "country": "Åland Islands",
      "status": "Inactive"
   }
];
function createTableRow(data) {
   const { customerName, company, phoneNumber, email, country, status } = data;

   const row = document.createElement('tr');

   const nameCell = document.createElement('td');
   nameCell.className = 'customer__name';
   nameCell.textContent = customerName;

   const companyCell = document.createElement('td');
   companyCell.className = 'customer__company';
   companyCell.textContent = company;

   const phoneCell = document.createElement('td');
   phoneCell.className = 'customer__phone';
   phoneCell.textContent = phoneNumber;

   const emailCell = document.createElement('td');
   emailCell.className = 'customer__email';
   emailCell.textContent = email;

   const countryCell = document.createElement('td');
   countryCell.className = 'customer__country';
   countryCell.textContent = country;

   const statusCell = document.createElement('td');
   statusCell.className = 'customer__status';

   const statusSpan = document.createElement('span');
   statusSpan.className = status === 'Active' ? 'active' : 'inactive';
   statusSpan.textContent = status;

   statusCell.appendChild(statusSpan);

   row.appendChild(nameCell);
   row.appendChild(companyCell);
   row.appendChild(phoneCell);
   row.appendChild(emailCell);
   row.appendChild(countryCell);
   row.appendChild(statusCell);

   return row;
}

document.addEventListener('DOMContentLoaded', function() {
   const body = document.querySelector('body');
   const sidebar = document.querySelector('aside');
   const openCloseButton = document.querySelector('#sidebar__open-close');
   const table = document.querySelector('.customers__table');

   data.forEach(item=> {
      const row = createTableRow(item);
      table.querySelector('tbody').appendChild(row);
   })

   openCloseButton.addEventListener('click', function () {
      sidebar.classList.toggle('closed');
      body.style.overflow = sidebar.classList.contains('closed') ? '' : 'hidden';
   })

});
