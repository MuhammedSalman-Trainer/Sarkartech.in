import { useState } from 'react'
import './IdeaForm.css'

const EMAIL = 'muhammed.salman@sarkartech.in'

export default function IdeaForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [idea, setIdea] = useState('')
  const [files, setFiles] = useState([])

  const buildMailto = () => {
    const subject = encodeURIComponent(`Idea submission from ${name || 'Student'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nIdea / Project description:\n${idea}\n\n` +
      (files.length ? `Attachments: ${files.map(f => f.name).join(', ')} (Please attach these files to this email manually if not already sent.)` : '')
    )
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = buildMailto()
  }

  const handleFileChange = (e) => {
    const list = Array.from(e.target.files || [])
    setFiles(list)
  }

  return (
    <section id="submit-idea" className="idea-form">
      <h2 className="section-title">Submit your idea</h2>
      <p className="section-subtitle">
        Share your idea and required documents. We’ll get back to you. Submissions go to{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Your name *</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </div>
        <div className="form-row">
          <label htmlFor="idea">Your idea / project description *</label>
          <textarea
            id="idea"
            required
            rows={5}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your idea, what problem it solves, and what you’d like to build..."
          />
        </div>
        <div className="form-row">
          <label htmlFor="docs">Attach required documents (up to 500 MB)</label>
          <div className="file-input">
            <label htmlFor="docs" className="file-input-button">
              Choose files
            </label>
            <span className="file-input-label">
              {files.length === 0
                ? 'No files chosen'
                : `${files.length} file(s): ${files.map(f => f.name).join(', ')}`}
            </span>
            <input
              id="docs"
              type="file"
              multiple
              onChange={handleFileChange}
              className="file-input-native"
            />
          </div>
          <p className="form-hint">
            For files larger than 25 MB, email servers may reject attachments. Use a cloud link (Google Drive, WeTransfer, etc.) and paste it in your message, or send the link in a follow-up email to {EMAIL}.
          </p>
          {files.length > 0 && (
            <p className="form-files-list">
              Selected: {files.map(f => f.name).join(', ')} ({files.length} file(s))
            </p>
          )}
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Open email and send to {EMAIL}
          </button>
        </div>
        <p className="form-note">
          Clicking submit opens your default email client with your message and recipient {EMAIL}.
          Please attach your documents there (or share cloud links in the body). We’ll receive your submission at muhammed.salman@sarkartech.in.
        </p>
      </form>
    </section>
  )
}
