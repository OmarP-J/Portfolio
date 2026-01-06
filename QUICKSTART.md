# 🚀 Quick Start Guide

This guide will get your portfolio running in minutes!

## ✅ Prerequisites Check

Before starting, verify you have:
- [ ] **Node.js 18+** (check: `node --version`) - ✓ Already installed!
- [ ] **Python 3.11+** (check: `python --version`) - ⚠️ Needs installation

## 📥 Step 1: Install Python (if needed)

Since Python is not detected, install it:

1. **Download Python**: https://www.python.org/downloads/
2. **Run installer** and check "Add Python to PATH"
3. **Verify**: Open new terminal and run `python --version`

## 🔧 Step 2: Backend Setup

```powershell
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
copy .env.example .env

# Start the backend server
python -m app.main
```

✅ Backend running at: http://localhost:8000
📚 API Docs at: http://localhost:8000/api/docs

## 🎨 Step 3: Frontend Setup

**Open a NEW terminal** (keep backend running):

```powershell
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

✅ Frontend running at: http://localhost:4200

## 🎉 You're Done!

Open your browser to **http://localhost:4200** and explore your portfolio!

### 🔍 What to Check:
- ✅ Home page loads
- ✅ Navigation works (click on pages)
- ✅ Projects page shows projects from API
- ✅ Contact form validates input
- ✅ Everything is responsive (resize browser)

## 🐛 Troubleshooting

### Backend won't start?
- Make sure Python is installed and in PATH
- Check that port 8000 is not in use
- Verify virtual environment is activated (you should see `(venv)` in terminal)

### Frontend won't start?
- Make sure `npm install` completed successfully
- Check that port 4200 is not in use
- Clear node_modules and reinstall: `rm -r node_modules && npm install`

### Can't see projects?
- Make sure backend is running
- Check browser console for errors
- Verify backend URL in `frontend/src/environments/environment.ts`

### CORS errors?
- Ensure backend is running
- Check CORS settings in `backend/.env`
- Backend should allow `http://localhost:4200`

## 📝 Next Steps

1. **Customize content**: Update text in component files
2. **Add your projects**: Edit `backend/app/services/project_service.py`
3. **Update links**: Change GitHub, LinkedIn links in footer
4. **Style tweaks**: Modify CSS files to match your brand
5. **Deploy**: Follow deployment guide in main README

## 📚 More Information

- **Full README**: See `../README.md`
- **Backend README**: See `backend/README.md`
- **Frontend README**: See `frontend/README.md`

---

**Need help?** Check the detailed READMEs or open an issue on GitHub!
