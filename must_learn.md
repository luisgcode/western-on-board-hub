# Must Learn - Personal Learning Roadmap

## JavaScript Data Structures

### Arrays vs Objects - Data Organization
**Date**: 2025-07-10
**Context**: Working on documents.js data structure for onboarding app

**What I struggled with:**
- Mixing up array and object syntax
- Forgetting the `=` assignment operator
- Not understanding the difference between a single object and an array of objects

**Key concepts to remember:**
- **Single Object**: `const obj = { key: "value" }`
- **Array of Objects**: `const arr = [{ key: "value" }, { key: "value" }]`
- **Arrays use square brackets** `[]` - like a filing cabinet
- **Objects use curly braces** `{}` - like folders in the cabinet

**Example to review:**
```javascript
// WRONG: Missing = and wrong structure
const documents { id: "", name: "" }

// RIGHT: Array of objects with assignment
const documents = [
  { id: 1, name: "Employee Handbook" },
  { id: 2, name: "IT Setup Guide" },
  { id: 3, name: "Safety Manual" }
]
```

**When to use what - Document Storage Examples:**

**1. Just Arrays** - Simple list of items
```javascript
const documentNames = ["Employee Handbook", "IT Setup", "Safety Manual"]
```
- **Best for**: Simple lists, temporary storage, when you only need one piece of info
- **Limitations**: Hard to add more details later, no structure

**2. Just Objects** - Single item with properties
```javascript
const document = { id: 1, name: "Employee Handbook", category: "HR" }
```
- **Best for**: Single item, configuration settings, representing one thing
- **Limitations**: Can't handle multiple items easily

**3. Array of Objects** - Multiple structured items (OUR CHOICE)
```javascript
const documents = [
  { id: 1, name: "Employee Handbook", category: "HR" },
  { id: 2, name: "IT Setup", category: "Tech" },
  { id: 3, name: "Safety Guidelines", category: "Safety" },
  { id: 4, name: "Benefits Overview", category: "HR" }
]
```
- **Best for**: Lists of similar items that need multiple properties
- **Perfect for**: Database-like data, user lists, product catalogs, document libraries

**4. Object with Arrays** - Grouped data
```javascript
const documentsByCategory = {
  HR: ["Employee Handbook", "Benefits Guide"],
  Tech: ["IT Setup", "Software List"]
}
```
- **Best for**: Pre-organized data, when you need to group things

**5. Nested Objects** - Complex relationships
```javascript
const documents = {
  1: { name: "Handbook", category: "HR", author: { name: "John", dept: "HR" } },
  2: { name: "IT Setup", category: "Tech", author: { name: "Jane", dept: "IT" } }
}
```
- **Best for**: Complex data with relationships, when you need to lookup by key

**Decision Framework:**
- **Multiple similar items?** → Array of Objects
- **Single item with details?** → Object
- **Simple list?** → Array
- **Need to group/organize?** → Object with Arrays
- **Complex relationships?** → Nested Objects

**Practice resources:**
- Review JavaScript array methods (map, filter, find)
- Practice creating different data structures
- Understand when to use arrays vs objects
- Try converting the same data between different structures

---