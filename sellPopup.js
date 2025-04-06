/**
 * Sell Popup Implementation for Landing Page
 * Shows random Indian user details in a popup at the bottom left corner
 */

// Array of 200+ Indian users with their details
const indianUsers = [
  // Keep existing user data array
];

// Set to keep track of shown users
let shownUsers = new Set();

// Function to create and show the popup
function showSellPopup(user) {
  // Create popup container if not exists
  let popupContainer = document.getElementById('sell-popup');
  if (!popupContainer) {
    popupContainer = document.createElement('div');
    popupContainer.id = 'sell-popup';
    document.body.appendChild(popupContainer);
  }

  // Format mobile number
  const mobileNumber = `+91 ${user.mobilePrefix}XXXXX`;

  // Create popup content
  popupContainer.innerHTML = `
    <div class="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm animate-fadeInUp z-50 border border-slate-200">
      <div class="flex items-start gap-4">
        <div class="bg-primary-lighter rounded-full p-3">
          <i class="fas fa-user text-primary text-xl"></i>
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-neutral-darkest">${user.name}</h3>
          <p class="text-neutral-DEFAULT text-sm">${mobileNumber}</p>
          <p class="text-neutral-DEFAULT text-sm">${user.state}, ${user.city}</p>
          <p class="text-primary font-semibold mt-2">buy collection at ₹399</p>
        </div>
      </div>
    </div>
  `;

  // Add to shown users set
  shownUsers.add(user.name);

  // Remove popup after 5 seconds
  setTimeout(() => {
    popupContainer.remove();
    scheduleNextPopup();
  }, 5000);
}

// Function to get random user that hasn't been shown
function getRandomUser() {
  const availableUsers = indianUsers.filter(user => !shownUsers.has(user.name));
  if (availableUsers.length === 0) {
    // Reset shown users if all users have been shown
    shownUsers.clear();
    return indianUsers[Math.floor(Math.random() * indianUsers.length)];
  }
  return availableUsers[Math.floor(Math.random() * availableUsers.length)];
}

// Function to schedule next popup
function scheduleNextPopup() {
  const delay = Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000; // Random delay between 10-50 seconds
  setTimeout(() => {
    const user = getRandomUser();
    showSellPopup(user);
  }, delay);
}

// Start showing popups when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  scheduleNextPopup();
});

  { name: "Rajesh Kumar", mobilePrefix: "98765", state: "Maharashtra", city: "Mumbai" },
  { name: "Priya Sharma", mobilePrefix: "87654", state: "Delhi", city: "New Delhi" },
  { name: "Amit Singh", mobilePrefix: "76543", state: "Uttar Pradesh", city: "Lucknow" },
  { name: "Sunita Patel", mobilePrefix: "65432", state: "Gujarat", city: "Ahmedabad" },
  { name: "Vikram Mehta", mobilePrefix: "54321", state: "Rajasthan", city: "Jaipur" },
  { name: "Neha Gupta", mobilePrefix: "43210", state: "Punjab", city: "Chandigarh" },
  { name: "Sanjay Verma", mobilePrefix: "32109", state: "Madhya Pradesh", city: "Bhopal" },
  { name: "Anita Desai", mobilePrefix: "21098", state: "Karnataka", city: "Bangalore" },
  { name: "Rahul Joshi", mobilePrefix: "10987", state: "Tamil Nadu", city: "Chennai" },
  { name: "Pooja Malhotra", mobilePrefix: "09876", state: "West Bengal", city: "Kolkata" },
  { name: "Deepak Sharma", mobilePrefix: "98761", state: "Haryana", city: "Gurgaon" },
  { name: "Meena Reddy", mobilePrefix: "87652", state: "Telangana", city: "Hyderabad" },
  { name: "Suresh Nair", mobilePrefix: "76543", state: "Kerala", city: "Kochi" },
  { name: "Kavita Rao", mobilePrefix: "65438", state: "Andhra Pradesh", city: "Visakhapatnam" },
  { name: "Prakash Iyer", mobilePrefix: "54327", state: "Odisha", city: "Bhubaneswar" },
  { name: "Anjali Menon", mobilePrefix: "43216", state: "Bihar", city: "Patna" },
  { name: "Ramesh Tiwari", mobilePrefix: "32105", state: "Jharkhand", city: "Ranchi" },
  { name: "Sarita Choudhary", mobilePrefix: "21094", state: "Chhattisgarh", city: "Raipur" },
  { name: "Vijay Kulkarni", mobilePrefix: "10983", state: "Uttarakhand", city: "Dehradun" },
  { name: "Geeta Banerjee", mobilePrefix: "09872", state: "Assam", city: "Guwahati" },
  { name: "Anil Saxena", mobilePrefix: "98761", state: "Himachal Pradesh", city: "Shimla" },
  { name: "Ritu Kapoor", mobilePrefix: "87650", state: "Goa", city: "Panaji" },
  { name: "Manoj Sinha", mobilePrefix: "76549", state: "Tripura", city: "Agartala" },
  { name: "Shweta Agarwal", mobilePrefix: "65438", state: "Manipur", city: "Imphal" },
  { name: "Dinesh Mishra", mobilePrefix: "54327", state: "Meghalaya", city: "Shillong" },
  { name: "Rekha Trivedi", mobilePrefix: "43216", state: "Nagaland", city: "Kohima" },
  { name: "Ajay Mathur", mobilePrefix: "32105", state: "Arunachal Pradesh", city: "Itanagar" },
  { name: "Lata Venkatesh", mobilePrefix: "21094", state: "Mizoram", city: "Aizawl" },
  { name: "Nitin Chauhan", mobilePrefix: "10983", state: "Sikkim", city: "Gangtok" },
  { name: "Usha Pillai", mobilePrefix: "09872", state: "Jammu and Kashmir", city: "Srinagar" },
  { name: "Rakesh Bhatia", mobilePrefix: "98761", state: "Maharashtra", city: "Pune" },
  { name: "Shalini Khanna", mobilePrefix: "87650", state: "Delhi", city: "Delhi" },
  { name: "Vivek Ahluwalia", mobilePrefix: "76549", state: "Uttar Pradesh", city: "Kanpur" },
  { name: "Nandini Shah", mobilePrefix: "65438", state: "Gujarat", city: "Surat" },
  { name: "Rajendra Prasad", mobilePrefix: "54327", state: "Rajasthan", city: "Jodhpur" },
  { name: "Kiran Bedi", mobilePrefix: "43216", state: "Punjab", city: "Amritsar" },
  { name: "Mohan Lal", mobilePrefix: "32105", state: "Madhya Pradesh", city: "Indore" },
  { name: "Jyoti Sengupta", mobilePrefix: "21094", state: "Karnataka", city: "Mysore" },
  { name: "Alok Nath", mobilePrefix: "10983", state: "Tamil Nadu", city: "Coimbatore" },
  { name: "Seema Chatterjee", mobilePrefix: "09872", state: "West Bengal", city: "Howrah" },
  { name: "Vinod Khosla", mobilePrefix: "98761", state: "Haryana", city: "Faridabad" },
  { name: "Asha Devi", mobilePrefix: "87650", state: "Telangana", city: "Warangal" },
  { name: "Gopal Menon", mobilePrefix: "76549", state: "Kerala", city: "Thiruvananthapuram" },
  { name: "Radha Krishnan", mobilePrefix: "65438", state: "Andhra Pradesh", city: "Vijayawada" },
  { name: "Bharat Bhushan", mobilePrefix: "54327", state: "Odisha", city: "Cuttack" },
  { name: "Savita Kumari", mobilePrefix: "43216", state: "Bihar", city: "Gaya" },
  { name: "Pankaj Dubey", mobilePrefix: "32105", state: "Jharkhand", city: "Jamshedpur" },
  { name: "Mamta Sharma", mobilePrefix: "21094", state: "Chhattisgarh", city: "Bhilai" },
  { name: "Harish Rawat", mobilePrefix: "10983", state: "Uttarakhand", city: "Haridwar" },
  { name: "Lakshmi Narayan", mobilePrefix: "09872", state: "Assam", city: "Silchar" },
  { name: "Sudhir Chaudhary", mobilePrefix: "98761", state: "Himachal Pradesh", city: "Manali" },
  { name: "Preeti Jain", mobilePrefix: "87650", state: "Goa", city: "Margao" },
  { name: "Kamal Hassan", mobilePrefix: "76549", state: "Tamil Nadu", city: "Madurai" },
  { name: "Divya Bharti", mobilePrefix: "65438", state: "Maharashtra", city: "Nagpur" },
  { name: "Rajiv Gandhi", mobilePrefix: "54327", state: "Uttar Pradesh", city: "Agra" },
  { name: "Sonali Bendre", mobilePrefix: "43216", state: "Gujarat", city: "Vadodara" },
  { name: "Kapil Dev", mobilePrefix: "32105", state: "Haryana", city: "Rohtak" },
  { name: "Madhuri Dixit", mobilePrefix: "21094", state: "Maharashtra", city: "Nashik" },
  { name: "Sachin Tendulkar", mobilePrefix: "10983", state: "Maharashtra", city: "Mumbai" },
  { name: "Aishwarya Rai", mobilePrefix: "09872", state: "Karnataka", city: "Mangalore" },
  { name: "Amitabh Bachchan", mobilePrefix: "98761", state: "Uttar Pradesh", city: "Allahabad" },
  { name: "Kareena Kapoor", mobilePrefix: "87650", state: "Maharashtra", city: "Mumbai" },
  { name: "Virat Kohli", mobilePrefix: "76549", state: "Delhi", city: "Delhi" },
  { name: "Deepika Padukone", mobilePrefix: "65438", state: "Karnataka", city: "Bangalore" },
  { name: "Narendra Modi", mobilePrefix: "54327", state: "Gujarat", city: "Gandhinagar" },
  { name: "Priyanka Chopra", mobilePrefix: "43216", state: "Bihar", city: "Patna" },
  { name: "Shah Rukh Khan", mobilePrefix: "32105", state: "Delhi", city: "Delhi" },
  { name: "Sania Mirza", mobilePrefix: "21094", state: "Telangana", city: "Hyderabad" },
  { name: "Rahul Dravid", mobilePrefix: "10983", state: "Karnataka", city: "Bangalore" },
  { name: "Saina Nehwal", mobilePrefix: "09872", state: "Haryana", city: "Hisar" },
  { name: "Aamir Khan", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Sania Mirza", mobilePrefix: "87650", state: "Telangana", city: "Hyderabad" },
  { name: "Sushant Rajput", mobilePrefix: "76549", state: "Bihar", city: "Patna" },
  { name: "Katrina Kaif", mobilePrefix: "65438", state: "Maharashtra", city: "Mumbai" },
  { name: "Mahendra Dhoni", mobilePrefix: "54327", state: "Jharkhand", city: "Ranchi" },
  { name: "Anushka Sharma", mobilePrefix: "43216", state: "Uttar Pradesh", city: "Ayodhya" },
  { name: "Salman Khan", mobilePrefix: "32105", state: "Maharashtra", city: "Mumbai" },
  { name: "Sridevi Kapoor", mobilePrefix: "21094", state: "Tamil Nadu", city: "Chennai" },
  { name: "Akshay Kumar", mobilePrefix: "10983", state: "Punjab", city: "Amritsar" },
  { name: "Vidya Balan", mobilePrefix: "09872", state: "Kerala", city: "Palakkad" },
  { name: "Hrithik Roshan", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Kajol Devgan", mobilePrefix: "87650", state: "West Bengal", city: "Kolkata" },
  { name: "Ajay Devgan", mobilePrefix: "76549", state: "Maharashtra", city: "Mumbai" },
  { name: "Rani Mukerji", mobilePrefix: "65438", state: "West Bengal", city: "Kolkata" },
  { name: "Ranbir Kapoor", mobilePrefix: "54327", state: "Maharashtra", city: "Mumbai" },
  { name: "Sonam Kapoor", mobilePrefix: "43216", state: "Maharashtra", city: "Mumbai" },
  { name: "Shahid Kapoor", mobilePrefix: "32105", state: "Delhi", city: "Delhi" },
  { name: "Shraddha Kapoor", mobilePrefix: "21094", state: "Maharashtra", city: "Mumbai" },
  { name: "Varun Dhawan", mobilePrefix: "10983", state: "Maharashtra", city: "Mumbai" },
  { name: "Alia Bhatt", mobilePrefix: "09872", state: "Maharashtra", city: "Mumbai" },
  { name: "Ranveer Singh", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Parineeti Chopra", mobilePrefix: "87650", state: "Haryana", city: "Ambala" },
  { name: "Arjun Kapoor", mobilePrefix: "76549", state: "Maharashtra", city: "Mumbai" },
  { name: "Shruti Haasan", mobilePrefix: "65438", state: "Tamil Nadu", city: "Chennai" },
  { name: "Sidharth Malhotra", mobilePrefix: "54327", state: "Delhi", city: "Delhi" },
  { name: "Kriti Sanon", mobilePrefix: "43216", state: "Delhi", city: "Delhi" },
  { name: "Tiger Shroff", mobilePrefix: "32105", state: "Maharashtra", city: "Mumbai" },
  { name: "Disha Patani", mobilePrefix: "21094", state: "Uttar Pradesh", city: "Bareilly" },
  { name: "Kartik Aaryan", mobilePrefix: "10983", state: "Madhya Pradesh", city: "Gwalior" },
  { name: "Sara Ali Khan", mobilePrefix: "09872", state: "Maharashtra", city: "Mumbai" },
  { name: "Vicky Kaushal", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Taapsee Pannu", mobilePrefix: "87650", state: "Delhi", city: "Delhi" },
  { name: "Ayushmann Khurrana", mobilePrefix: "76549", state: "Punjab", city: "Chandigarh" },
  { name: "Bhumi Pednekar", mobilePrefix: "65438", state: "Maharashtra", city: "Mumbai" },
  { name: "Rajkummar Rao", mobilePrefix: "54327", state: "Haryana", city: "Gurgaon" },
  { name: "Janhvi Kapoor", mobilePrefix: "43216", state: "Maharashtra", city: "Mumbai" },
  { name: "Ishaan Khatter", mobilePrefix: "32105", state: "Maharashtra", city: "Mumbai" },
  { name: "Ananya Panday", mobilePrefix: "21094", state: "Maharashtra", city: "Mumbai" },
  { name: "Tara Sutaria", mobilePrefix: "10983", state: "Maharashtra", city: "Mumbai" },
  { name: "Aditya Roy Kapur", mobilePrefix: "09872", state: "Maharashtra", city: "Mumbai" },
  { name: "Kiara Advani", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Rakul Preet Singh", mobilePrefix: "87650", state: "Telangana", city: "Hyderabad" },
  { name: "Nushrat Bharucha", mobilePrefix: "76549", state: "Maharashtra", city: "Mumbai" },
  { name: "Mouni Roy", mobilePrefix: "65438", state: "West Bengal", city: "Kolkata" },
  { name: "Sunny Leone", mobilePrefix: "54327", state: "Punjab", city: "Sarnia" },
  { name: "Jacqueline Fernandez", mobilePrefix: "43216", state: "Maharashtra", city: "Mumbai" },
  { name: "Nora Fatehi", mobilePrefix: "32105", state: "Maharashtra", city: "Mumbai" },
  { name: "Urvashi Rautela", mobilePrefix: "21094", state: "Uttarakhand", city: "Kotdwar" },
  { name: "Yami Gautam", mobilePrefix: "10983", state: "Himachal Pradesh", city: "Bilaspur" },
  { name: "Radhika Apte", mobilePrefix: "09872", state: "Maharashtra", city: "Pune" },
  { name: "Aditi Rao Hydari", mobilePrefix: "98761", state: "Telangana", city: "Hyderabad" },
  { name: "Ileana D'Cruz", mobilePrefix: "87650", state: "Maharashtra", city: "Mumbai" },
  { name: "Huma Qureshi", mobilePrefix: "76549", state: "Delhi", city: "Delhi" },
  { name: "Richa Chadha", mobilePrefix: "65438", state: "Punjab", city: "Amritsar" },
  { name: "Swara Bhasker", mobilePrefix: "54327", state: "Delhi", city: "Delhi" },
  { name: "Kalki Koechlin", mobilePrefix: "43216", state: "Tamil Nadu", city: "Pondicherry" },
  { name: "Konkona Sen Sharma", mobilePrefix: "32105", state: "West Bengal", city: "Kolkata" },
  { name: "Nimrat Kaur", mobilePrefix: "21094", state: "Punjab", city: "Pilani" },
  { name: "Fatima Sana Shaikh", mobilePrefix: "10983", state: "Maharashtra", city: "Mumbai" },
  { name: "Sanya Malhotra", mobilePrefix: "09872", state: "Delhi", city: "Delhi" },
  { name: "Mrunal Thakur", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Rasika Dugal", mobilePrefix: "87650", state: "Jharkhand", city: "Jamshedpur" },
  { name: "Sobhita Dhulipala", mobilePrefix: "76549", state: "Andhra Pradesh", city: "Visakhapatnam" },
  { name: "Shweta Tripathi", mobilePrefix: "65438", state: "Uttar Pradesh", city: "Lucknow" },
  { name: "Sayani Gupta", mobilePrefix: "54327", state: "West Bengal", city: "Kolkata" },
  { name: "Tillotama Shome", mobilePrefix: "43216", state: "West Bengal", city: "Kolkata" },
  { name: "Radhika Madan", mobilePrefix: "32105", state: "Delhi", city: "Delhi" },
  { name: "Tripti Dimri", mobilePrefix: "21094", state: "Uttarakhand", city: "Dehradun" },
  { name: "Alaya F", mobilePrefix: "10983", state: "Maharashtra", city: "Mumbai" },
  { name: "Banita Sandhu", mobilePrefix: "09872", state: "West Bengal", city: "Kolkata" },
  { name: "Zaira Wasim", mobilePrefix: "98761", state: "Jammu and Kashmir", city: "Srinagar" },
  { name: "Kritika Kamra", mobilePrefix: "87650", state: "Madhya Pradesh", city: "Bareilly" },
  { name: "Mithila Palkar", mobilePrefix: "76549", state: "Maharashtra", city: "Mumbai" },
  { name: "Prajakta Koli", mobilePrefix: "65438", state: "Maharashtra", city: "Mumbai" },
  { name: "Kusha Kapila", mobilePrefix: "54327", state: "Delhi", city: "Delhi" },
  { name: "Dolly Singh", mobilePrefix: "43216", state: "Uttarakhand", city: "Nainital" },
  { name: "Koena Mitra", mobilePrefix: "32105", state: "West Bengal", city: "Kolkata" },
  { name: "Gauahar Khan", mobilePrefix: "21094", state: "Maharashtra", city: "Mumbai" },
  { name: "Gauhar Khan", mobilePrefix: "10983", state: "Uttar Pradesh", city: "Lucknow" },
  { name: "Hina Khan", mobilePrefix: "09872", state: "Jammu and Kashmir", city: "Srinagar" },
  { name: "Jennifer Winget", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Divyanka Tripathi", mobilePrefix: "87650", state: "Madhya Pradesh", city: "Bhopal" },
  { name: "Drashti Dhami", mobilePrefix: "76549", state: "Gujarat", city: "Surat" },
  { name: "Mouni Roy", mobilePrefix: "65438", state: "West Bengal", city: "Cooch Behar" },
  { name: "Ankita Lokhande", mobilePrefix: "54327", state: "Maharashtra", city: "Indore" },
  { name: "Nia Sharma", mobilePrefix: "43216", state: "Delhi", city: "Delhi" },
  { name: "Erica Fernandes", mobilePrefix: "32105", state: "Karnataka", city: "Bangalore" },
  { name: "Surbhi Jyoti", mobilePrefix: "21094", state: "Punjab", city: "Jalandhar" },
  { name: "Rubina Dilaik", mobilePrefix: "10983", state: "Himachal Pradesh", city: "Shimla" },
  { name: "Shivangi Joshi", mobilePrefix: "09872", state: "Uttarakhand", city: "Dehradun" },
  { name: "Tejasswi Prakash", mobilePrefix: "98761", state: "Maharashtra", city: "Mumbai" },
  { name: "Jasmin Bhasin", mobilePrefix: "87650", state: "Punjab", city: "Kota" },
  { name: "Shehnaaz Gill", mobilePrefix: "76549", state: "Punjab", city: "Chandigarh" },
  { name: "Asim Riaz", mobilePrefix: "65438", state: "Jammu and Kashmir", city: "Jammu" },
  { name: "Sidharth Shukla", mobilePrefix: "54327", state: "Maharashtra", city: "Mumbai" },
  { name: "Rashami Desai", mobilePrefix: "43216", state: "Gujarat", city: "Surat" },
  { name: "Devoleena Bhattacharjee", mobilePrefix: "32105", state: "Assam", city: "Sivasagar" },
  { name: "Arti Singh", mobilePrefix: "21094", state: "Uttar Pradesh", city: "Lucknow" },
  { name: "Paras Chhabra", mobilePrefix: "10983", state: "Delhi", city: "Delhi" },
  { name: "Mahira Sharma", mobilePrefix: "09872", state: "Jammu and Kashmir", city: "Jammu" },
  { name: "Vishal Aditya Singh", mobilePrefix: "98761", state: "Bihar", city: "Arrah" },
  { name: "Madhurima Tuli", mobilePrefix: "87650", state: "Uttarakhand", city: "Dehradun" },
  { name: "Shefali Jariwala", mobilePrefix: "76549", state: "Gujarat", city: "Ahmedabad" },
  { name: "Himanshi Khurana", mobilePrefix: "65438", state: "Punjab", city: "Ludhiana" },
  { name: "Arhaan Khan", mobilePrefix: "54327", state: "Maharashtra", city: "Mumbai" },
  { name: "Shehbaz Badesha", mobilePrefix: "43216", state: "Punjab", city: "Amritsar" },
  { name: "Vikas Gupta", mobilePrefix: "32105", state: "Jharkhand", city: "Dehradun" },
  { name: "Hindustani Bhau", mobilePrefix: "21094", state: "Maharashtra", city: "Mumbai" },
  { name: "Tehseen Poonawalla", mobilePrefix: "10983", state: "Maharashtra", city: "Pune" },
  { name: "Khesari Lal Yadav", mobilePrefix: "09872", state: "Bihar", city: "Chhapra" },
  { name: "Dalljiet Kaur", mobilePrefix: "98761", state: "Punjab", city: "Ludhiana" },
  { name: "Abu Malik", mobilePrefix: "87650", state: "Maharashtra", city: "Mumbai" },
  { name: "Koena Mitra", mobilePrefix: "76549", state: "West Bengal", city: "Kolkata" },
  { name: "Siddharth Dey", mobilePrefix: "65438", state: "Maharashtra", city: "Mumbai" },
  { name: "Shefali Bagga", mobilePrefix: "54327", state: "Delhi", city: "Delhi" },
  { name: "Asim Riaz", mobilePrefix: "43216", state: "Jammu and Kashmir", city: "Jammu" },
  { name: "Akansha Puri", mobilePrefix: "32105", state: "Madhya Pradesh", city: "Indore" },
  { name: "Mahek Chahal", mobilePrefix: "21094", state: "Maharashtra", city: "Mumbai" },
  { name: "Sana Khan", mobilePrefix: "10983", state: "Maharashtra", city: "Mumbai" },
  { name: "Karishma Tanna", mobilePrefix: "09872", state: "Gujarat", city: "Ahmedabad" },
  { name: "Gautam Gulati", mobilePrefix: "98761", state: "Delhi", city: "Delhi" },
  { name: "Diandra Soares", mobilePrefix: "87650", state: "Maharashtra", city: "Mumbai" },
  { name: "Sonali Raut", mobilePrefix: "76549", state: "Maharashtra", city: "Mumbai" },
  { name: "Upen Patel", mobilePrefix: "65438", state: "Maharashtra", city: "Mumbai" },
  { name: "Praneet Bhatt", mobilePrefix: "54327", state: "Uttarakhand", city: "Dehradun" },
  { name: "Puneet Issar", mobilePrefix: "43216", state: "Punjab", city: "Amritsar" },
  { name: "Natasa Stankovic", mobilePrefix: "32105", state: "Maharashtra", city: "Mumbai" },
  { name: "Sushant Divgikar", mobilePrefix: "21094", state: "Maharashtra", city: "Mumbai" },
  { name: "Aarya Babbar", mobilePrefix: "10983", state: "Punjab", city: "Chandigarh" },
  { name: "Minissha Lamba", mobilePrefix: "09872", state: "Delhi", city: "Delhi" },
  { name: "Soni Singh", mobilePrefix: "98761", state: "Bihar", city: "Patna" },
  { name: "Sukirti Kandpal", mobilePrefix: "87650", state: "Uttarakhand", city: "Nainital" },
  { name: "Deepshikha Nagpal