import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
      color: getRandomColor() // Add random background color
    }

    setNotes([...notes, newNote])
    setTitle('')
    setContent('')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  // Function to generate random pastel colors
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360)
    return `hsl(${hue}, 70%, 90%)`
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)'
    }}>
      <h1 style={{
        color: '#FFD700', // Changed to gold color
        marginBottom: '30px',
        fontSize: '2.5em',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>Google Notes</h1>
      
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '80%',
            padding: '12px',
            fontSize: '18px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#2C3E50', // Changed text color
            transition: 'all 0.3s ease'
          }}
        />
        <textarea
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: '80%',
            height: '150px',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            resize: 'vertical',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#2C3E50', // Changed text color
            transition: 'all 0.3s ease'
          }}
        />
        <button type="submit" style={{
          padding: '12px 30px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: '#FFFFFF', // Bright white text
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          ':hover': {
            transform: 'scale(1.05)'
          }
        }}>Add Note</button>
      </form>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {notes.map(note => (
          <div key={note.id} style={{
            backgroundColor: note.color || '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            transform: 'translateY(0)',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 20px rgba(0,0,0,0.15)'
            }
          }}>
            <h3 style={{ 
              margin: '0 0 10px 0', 
              color: '#1E3A8A', // Changed to deep blue
              fontSize: '1.3em',
              borderBottom: '2px solid rgba(0,0,0,0.1)',
              paddingBottom: '8px'
            }}>{note.title}</h3>
            <p style={{ 
              flex: 1, 
              marginBottom: '15px', 
              color: '#2C3E50', // Changed to darker slate
              lineHeight: '1.6'
            }}>{note.content}</p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 'auto',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              paddingTop: '10px'
            }}>
              <small style={{ 
                color: '#4A5568', // Changed to medium gray
                fontStyle: 'italic'
              }}>{new Date(note.createdAt).toLocaleDateString()}</small>
              <button 
                onClick={() => deleteNote(note.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#ff4444',
                  color: '#FFFFFF', // Bright white text
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    backgroundColor: '#ff0000'
                  }
                }}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
