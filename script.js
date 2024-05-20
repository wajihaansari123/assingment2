const person = {
    // Attributes
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    address: "123 Main St, Anytown, USA",
    phoneNumber: "123-456-7890",
  
    // Method to retrieve the name
    getName: function() {
      return this.name;
    },
  
    // Method to update the name
    setName: function(newName) {
      this.name = newName;
    },
  
    // Method to retrieve the age
    getAge: function() {
      return this.age;
    },
  
    // Method to update the age
    setAge: function(newAge) {
      this.age = newAge;
    },
  
    // Method to retrieve the email
    getEmail: function() {
      return this.email;
    },
  
    // Method to update the email
    setEmail: function(newEmail) {
      this.email = newEmail;
    },
  
    // Method to retrieve the address
    getAddress: function() {
      return this.address;
    },
  
    // Method to update the address
    setAddress: function(newAddress) {
      this.address = newAddress;
    },
  
    // Method to retrieve the phone number
    getPhoneNumber: function() {
      return this.phoneNumber;
    },
  
    // Method to update the phone number
    setPhoneNumber: function(newPhoneNumber) {
      this.phoneNumber = newPhoneNumber;
    }
  };
  
  function updateName() {
    const newName = document.getElementById("name").value;
    person.setName(newName);
    alert("Name updated to: " + person.getName());
  }
  
  function updateAge() {
    const newAge = document.getElementById("age").value;
    person.setAge(newAge);
    alert("Age updated to: " + person.getAge());
  }
  
  function updateEmail() {
    const newEmail = document.getElementById("email").value;
    person.setEmail(newEmail);
    alert("Email updated to: " + person.getEmail());
  }
  
  function updateAddress() {
    const newAddress = document.getElementById("address").value;
    person.setAddress(newAddress);
    alert("Address updated to: " + person.getAddress());
  }
  
  function updatePhoneNumber() {
    const newPhoneNumber = document.getElementById("phoneNumber").value;
    person.setPhoneNumber(newPhoneNumber);
    alert("Phone Number updated to: " + person.getPhoneNumber());
  }
  
  function displayPerson() {
    const details = `
      <p><strong>Name:</strong> ${person.getName()}</p>
      <p><strong>Age:</strong> ${person.getAge()}</p>
      <p><strong>Email:</strong> ${person.getEmail()}</p>
      <p><strong>Address:</strong> ${person.getAddress()}</p>
      <p><strong>Phone Number:</strong> ${person.getPhoneNumber()}</p>
    `;
    document.getElementById("personDetails").innerHTML = details;
  }
  