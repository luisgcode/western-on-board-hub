# Western Fair District - OnBoard Hub Project Plan

## Project Overview

A simple, accessible web hub for Western Fair District event services workers to access onboarding documents, PDFs, and instructions online. This will streamline new worker onboarding and provide centralized access to all necessary resources.

---

## Section 1: Architecture Decisions Made

### ✅ Frontend Stack (Decided)

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation

### ✅ Backend Decision (Decided)

- **Firebase** - Authentication, database, and file storage
- **Reason**: Good for learning, free tier, integrates well with React

### ✅ Authentication Strategy (Decided)

- **Email/Password** with Firebase Auth
- **Single admin account** (not Google Auth)
- **Context API** for state management

### 🟡 Decisions Still Pending

- **File Storage**: Where to store PDFs (Firebase Storage vs static files)
- **Database Structure**: How to organize document metadata
- **Deployment**: Where to host the final app

---

## Section 2: Step-by-Step Implementation

### Phase 1: Authentication ✅ COMPLETED

- [x] Create Firebase project in console.firebase.google.com
- [x] Enable Email/Password authentication in Firebase console
- [x] Create src/firebase.js with Firebase config and auth functions
- [x] Create src/contexts/AuthContext.jsx with Context API
- [x] Wrap App with AuthProvider in main.jsx
- [x] Create src/Pages/LoginPage/LoginPage.jsx with email/password form
- [x] Add conditional rendering in NavigationMenu.jsx (Login/Logout)
- [x] Create handleLogout function that calls Firebase signOut()

### Phase 2: Document Management (CURRENT)

- [x] **Step 2.1**: Create DocumentsPage.jsx in src/Pages/DocumentsPage/
  - _Why_: We need a dedicated page to show all available documents
  - _How_: Create React component with JSX that renders a list of documents
- [x] **Step 2.2**: Add route "/documents" in App.jsx
  - _Why_: Users need a URL to navigate to the documents page
  - _How_: Add `<Route path="/documents" element={<DocumentsPage />} />` in Routes
- [x] **Step 2.3**: Create src/data/documents.js with sample document data
  - _Why_: We need fake data to practice with before building real database
  - _How_: Export array of objects with {id, name, description, filePath, category}
- [ ] **Step 2.4**: Create DocumentCard.jsx component to display each document
  - _Why_: Reusable component makes code cleaner and easier to maintain
  - _How_: Component takes document props and renders title, description, download button
- [ ] **Step 2.5**: Add DocumentsList.jsx component to render all documents
  - _Why_: Separates the logic of "list container" from "individual items"
  - _How_: Maps over documents array and renders DocumentCard for each one
- [ ] **Step 2.6**: Style DocumentsPage with Tailwind CSS
  - _Why_: Make it look professional and mobile-friendly
  - _How_: Use grid/flexbox classes, spacing, colors from your design system
- [ ] **Step 2.7**: Add download functionality with window.open() or <a> tag
  - _Why_: Users need to actually download/view the PDFs
  - _How_: Option 1: `<a href="/documents/file.pdf" download>` or Option 2: `window.open()`
- [ ] **Step 2.8**: Implement Protected Routes for document access
  - _Why_: Users should only access documents after login (security first)
  - _How_: Create ProtectedRoute component that checks authentication state
- [ ] **Step 2.9**: Test document listing and download in browser
  - _Why_: Make sure everything works before moving to next phase
  - _How_: Click download buttons, check mobile responsive, test different browsers

### Phase 3: Admin Upload Interface

- [ ] **Step 3.1**: Create AdminPage.jsx with file upload form
  - _Why_: Admin needs a way to add new documents without coding
  - _How_: Create form with file input, title input, description textarea
- [ ] **Step 3.2**: Add <input type="file" accept=".pdf"> for PDF uploads
  - _Why_: Restricts file selection to only PDF files for security
  - _How_: HTML input with accept attribute filters file picker to PDFs only
- [ ] **Step 3.3**: Create handleFileUpload function to process files
  - _Why_: Need to handle what happens when user selects a file
  - _How_: Use FileReader API to read file or FormData to process file upload
- [ ] **Step 3.4**: Add form validation (file type, size limits)
  - _Why_: Prevent users from uploading huge files or wrong file types
  - _How_: Check file.type === 'application/pdf' and file.size < 10MB
- [ ] **Step 3.5**: Store uploaded files in public/documents/ folder
  - _Why_: Files need to be accessible via URL for download
  - _How_: For now, manually copy files. Later: use File System API or server
- [ ] **Step 3.6**: Update documents.js data when new files are added
  - _Why_: New documents need to appear in the document list
  - _How_: For now, manually update array. Later: use database or localStorage
- [ ] **Step 3.7**: Add success/error messages for upload feedback
  - _Why_: User needs to know if upload worked or failed
  - _How_: Use useState for message state, show green/red alerts with Tailwind

### Phase 4: Polish & UX

- [ ] **Step 4.1**: Add loading spinner component in src/components/LoadingSpinner.jsx
- [ ] **Step 4.2**: Add error boundary component in src/components/ErrorBoundary.jsx
- [ ] **Step 4.3**: Add 404 page styling improvements
- [ ] **Step 4.4**: Test all pages on mobile devices (responsive design)
- [ ] **Step 4.5**: Add breadcrumb navigation in each page header

### Phase 5: Deployment

- [ ] **Step 5.1**: Create .env file with Firebase config variables
- [ ] **Step 5.2**: Update firebase.js to use process.env variables
- [ ] **Step 5.3**: Run npm run build to create production build
- [ ] **Step 5.4**: Deploy to Netlify or Vercel (drag and drop dist folder)
- [ ] **Step 5.5**: Test deployed app with real Firebase authentication

---

## Section 3: Immediate Next Steps

### What to do right now:

1. **Step 2.1**: Create DocumentsPage.jsx file in src/Pages/DocumentsPage/ folder
2. **Step 2.2**: Add new route `<Route path="/documents" element={<DocumentsPage />} />` in App.jsx
3. **Step 2.3**: Create documents.js file with sample PDF data (name, description, file path)
4. **Step 2.4**: Create DocumentCard.jsx component to display individual document info

### Priority Order:

1. **HIGH**: Complete Steps 2.1-2.4 (basic document listing)
2. **HIGH**: Complete Steps 2.5-2.7 (make documents downloadable)
3. **MEDIUM**: Complete Step 2.8 (test everything works)
4. **LOW**: Move to Phase 3 (admin upload interface)

---

## Section 4: Success Criteria

### MVP Requirements:

- [ ] Users can log in with email/password
- [ ] Users can see list of available documents
- [ ] Users can download PDFs
- [ ] Admin can upload new documents
- [ ] Works on mobile devices

### Nice to Have:

- [ ] PDF preview in browser
- [ ] Document search
- [ ] Document documents
- [ ] User activity tracking

---

## Section 5: Progress Tracking

### Current Status: Phase 1 Complete ✅

- Authentication system working
- Protected routes implemented
- Login/logout functionality complete

### Next Milestone: Document Management

- Target: Complete Phase 2 within 1-2 weeks
- Focus: Core document features before polish

---

## Section 6: Review Section

### What Worked Well

- Firebase authentication was easier than expected
- Context API pattern worked well for global state
- Tailwind CSS made styling faster

### What Could Be Improved

- Initial planning was too scattered
- Need clearer step-by-step approach
- Should focus on one feature at a time

### Lessons Learned

- Context API is powerful for authentication
- Conditional rendering is key for auth flows
- Breaking down tasks into smaller steps helps

### Next Project Improvements

- Start with clearer, more organized planning
- Follow step-by-step approach from beginning
- Focus on MVP features first, then polish
