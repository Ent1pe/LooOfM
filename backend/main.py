from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="UMN Bathroom Finder API",
    description="Backend for the gender-neutral bathroom finder app",
    version="1.0.0"
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to UMN Bathroom Finder API!"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "bathroom-finder-api"}

# Test endpoint
@app.get("/api/test")
async def test_endpoint():
    return {"bathrooms": 5, "users": 0, "ratings": 0}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)