# 📚 Must Learn - Personal Learning Notes

## ✅ JavaScript Fundamentals (Completed)

### Arrays vs Objects - Data Organization
**When I learned this**: Working on documents.js structure

**Key insight**: 
- **Arrays** `[]` = Filing cabinet (multiple similar things)
- **Objects** `{}` = Folder (one thing with details)
- **Array of Objects** = Best for document lists

**Example that works**:
```javascript
const documents = [
  { id: 1, name: "Employee Handbook", category: "HR" },
  { id: 2, name: "IT Setup", category: "Tech" }
]
```

---

## 🎯 Current Study Topics

### JavaScript Array Methods (In Progress)
**Resource**: [Array Methods Video](https://www.youtube.com/watch?v=R8rmfD9Y5-c)
**Goal**: Master `map`, `filter`, `reduce`, `find`

**My notes**:
- `map()` = Transform each item
- `filter()` = Keep items that match condition  
- `reduce()` = Combine all items into one result
- `find()` = Get first item that matches

**Practice examples**:
```javascript
// Filter documents by category
documents.filter(doc => doc.category === "HR")

// Get just the names
documents.map(doc => doc.name)

// Find specific document
documents.find(doc => doc.id === 1)
```

**Struggles/Questions**:
- [ ] When to use `reduce()` vs `map()`?
- [ ] How does `filter()` + `map()` work together?

---

### TypeScript Basics (Next)
**Resource**: [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
**Goal**: Understand interfaces and basic types

**My notes**:
*(Add notes as you study)*

**Practice examples**:
*(Add code examples as you learn)*

**Struggles/Questions**:
*(Write down what confuses you)*

---

### Understanding Transformers (Next)  
**Resource**: [Hugging Face Course Ch1](https://huggingface.co/course/chapter1)
**Goal**: Understand how AI processes text

**My notes**:
*(Add notes as you study)*

**Key questions to answer**:
- What are tokens vs words?
- How does AI "understand" text?
- What's a context window?

---

## 🎯 Future Learning Topics

### Vector Embeddings (Phase 5)
**When I need this**: Building semantic search
**Key concept**: Numbers that represent text meaning

### Python Basics (Phase 4)  
**When I need this**: Building AI microservices
**Key differences from JavaScript**: Indentation, no braces

---

## 📝 Learning Notes Template

### [Topic Name]
**Resource**: [Link or reference]
**Goal**: [What I want to understand]
**My notes**: [Key insights as I learn]
**Practice examples**: [Code I tried]
**Struggles/Questions**: [What confused me]
**When I figured it out**: [Aha moment]

---

**🎯 Remember: Write notes in your own words. If you can't explain it simply, you don't understand it yet.**