// Simulated user database (stored in memory)
const users = [
  { email: "demo@learnhub.com", password: "demo123" }, // Demo account for testing
]

// Current logged-in user
let currentUser = null

// Course Data
const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch.",
    icon: "💻",
    lessons: [
      "Introduction to HTML",
      "Styling with CSS",
      "JavaScript Basics",
      "Building Your First Website",
      "Responsive Design Principles",
    ],
    completed: false,
  },
  {
    id: 2,
    title: "Python for Beginners",
    description: "Master Python programming from the ground up with hands-on projects and real-world examples.",
    icon: "🐍",
    lessons: [
      "Python Syntax and Variables",
      "Control Flow and Loops",
      "Functions and Modules",
      "Working with Data Structures",
      "Object-Oriented Programming",
    ],
    completed: false,
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    description: "Discover effective strategies for social media, SEO, and content marketing to grow your brand.",
    icon: "📱",
    lessons: [
      "Introduction to Digital Marketing",
      "Social Media Strategy",
      "SEO Fundamentals",
      "Content Marketing",
      "Analytics and Metrics",
    ],
    completed: false,
  },
  {
    id: 4,
    title: "Data Science with R",
    description: "Explore data analysis, visualization, and statistical modeling using the R programming language.",
    icon: "📊",
    lessons: [
      "Introduction to R",
      "Data Manipulation",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning Basics",
    ],
    completed: false,
  },
]

// DOM Elements
const loginPage = document.getElementById("loginPage")
const signupPage = document.getElementById("signupPage")
const homePage = document.getElementById("homePage")
const detailPage = document.getElementById("detailPage")
const courseList = document.getElementById("courseList")
const courseDetail = document.getElementById("courseDetail")
const backButton = document.getElementById("backButton")
const logoutButton = document.getElementById("logoutButton")

const loginForm = document.getElementById("loginForm")
const signupForm = document.getElementById("signupForm")
const showSignupLink = document.getElementById("showSignup")
const showLoginLink = document.getElementById("showLogin")
const loginError = document.getElementById("loginError")
const signupError = document.getElementById("signupError")

// Initialize App
function init() {
  setupEventListeners()
  checkAuthStatus()
}

function checkAuthStatus() {
  if (currentUser) {
    showCoursePage()
  } else {
    showLoginPage()
  }
}

function showLoginPage() {
  hideAllPages()
  loginPage.classList.add("active")
  logoutButton.style.display = "none"
  clearForm(loginForm)
  hideError(loginError)
}

function showSignupPage() {
  hideAllPages()
  signupPage.classList.add("active")
  logoutButton.style.display = "none"
  clearForm(signupForm)
  hideError(signupError)
}

function showCoursePage() {
  hideAllPages()
  homePage.classList.add("active")
  logoutButton.style.display = "block"
  renderCourseList()
}

function hideAllPages() {
  loginPage.classList.remove("active")
  signupPage.classList.remove("active")
  homePage.classList.remove("active")
  detailPage.classList.remove("active")
}

function handleLogin(e) {
  e.preventDefault()

  const email = document.getElementById("loginEmail").value.trim()
  const password = document.getElementById("loginPassword").value

  // Find user in the users array
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

  if (user) {
    // Login successful
    currentUser = user
    hideError(loginError)
    showCoursePage()
  } else {
    // Login failed
    showError(loginError, "Invalid email/username or password. Please try again.")
  }
}

function handleSignup(e) {
  e.preventDefault()

  const email = document.getElementById("signupEmail").value.trim()
  const password = document.getElementById("signupPassword").value
  const passwordConfirm = document.getElementById("signupPasswordConfirm").value

  // Validation: Check if passwords match
  if (password !== passwordConfirm) {
    showError(signupError, "Passwords do not match. Please try again.")
    return
  }

  // Validation: Check if password is strong enough (at least 6 characters)
  if (password.length < 6) {
    showError(signupError, "Password must be at least 6 characters long.")
    return
  }

  // Validation: Check if user already exists
  const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase())
  if (existingUser) {
    showError(signupError, "An account with this email/username already exists.")
    return
  }

  // Create new user
  const newUser = { email, password }
  users.push(newUser)

  // Show success and redirect to login
  hideError(signupError)
  alert("Account created successfully! Please log in.")
  showLoginPage()
}

function handleLogout() {
  currentUser = null
  showLoginPage()
}

function showError(errorElement, message) {
  errorElement.textContent = message
  errorElement.classList.add("show")
}

function hideError(errorElement) {
  errorElement.textContent = ""
  errorElement.classList.remove("show")
}

function clearForm(form) {
  form.reset()
}

// Render Course List on Home Page
function renderCourseList() {
  courseList.innerHTML = ""

  courses.forEach((course) => {
    const courseCard = document.createElement("div")
    courseCard.className = `course-card ${course.completed ? "completed" : ""}`
    courseCard.onclick = () => showCourseDetail(course.id)

    const completedLessons = course.completed ? course.lessons.length : 0
    const totalLessons = course.lessons.length

    courseCard.innerHTML = `
            <div class="course-header">
                <div class="course-icon">${course.icon}</div>
                <h3 class="course-title">${course.title}</h3>
            </div>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span class="lesson-count">📚 ${completedLessons}/${totalLessons} lessons</span>
                <span class="status-badge ${course.completed ? "completed" : "not-completed"}">
                    ${course.completed ? "✅ Completed" : "❌ Not Completed"}
                </span>
            </div>
        `

    courseList.appendChild(courseCard)
  })
}

// Show Course Detail Page
function showCourseDetail(courseId) {
  const course = courses.find((c) => c.id === courseId)
  if (!course) return

  courseDetail.innerHTML = `
        <div class="detail-header">
            <div class="detail-icon">${course.icon}</div>
            <h2 class="detail-title">${course.title}</h2>
            <div class="detail-status ${course.completed ? "completed" : "not-completed"}">
                ${course.completed ? "✅ Completed" : "❌ Not Completed"}
            </div>
            <p class="detail-description">${course.description}</p>
        </div>
        
        <div class="lessons-section">
            <h3 class="lessons-title">📖 Course Curriculum</h3>
            <ul class="lessons-list">
                ${course.lessons
                  .map(
                    (lesson, index) => `
                    <li class="lesson-item">
                        <span class="lesson-number">${index + 1}</span>
                        <span class="lesson-title">${lesson}</span>
                    </li>
                `,
                  )
                  .join("")}
            </ul>
        </div>
        
        <div class="action-buttons">
            <button 
                class="btn btn-primary" 
                onclick="toggleCourseCompletion(${course.id})"
                ${course.completed ? "disabled" : ""}
            >
                ${course.completed ? "✅ Course Completed" : "Mark as Completed"}
            </button>
        </div>
    `

  // Switch pages
  homePage.classList.remove("active")
  detailPage.classList.add("active")
}

// Toggle Course Completion Status
function toggleCourseCompletion(courseId) {
  const course = courses.find((c) => c.id === courseId)
  if (!course) return

  // Mark as completed
  course.completed = true

  // Re-render the detail page to show updated status
  showCourseDetail(courseId)

  // Update the home page list (but don't switch to it yet)
  renderCourseList()
}

// Setup Event Listeners
function setupEventListeners() {
  backButton.addEventListener("click", () => {
    detailPage.classList.remove("active")
    homePage.classList.add("active")
  })

  loginForm.addEventListener("submit", handleLogin)
  signupForm.addEventListener("submit", handleSignup)
  logoutButton.addEventListener("click", handleLogout)

  showSignupLink.addEventListener("click", (e) => {
    e.preventDefault()
    showSignupPage()
  })

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault()
    showLoginPage()
  })
}

// Start the app
init()
