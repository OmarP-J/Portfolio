import sys
import os

# Add the current directory to python path
sys.path.append(os.getcwd())

try:
    from app.services.project_service import ProjectService
    from app.routers.projects import get_projects
    import asyncio

    print("Initializing ProjectService...")
    service = ProjectService()
    projects = service.get_all_projects()
    print(f"Projects found: {len(projects)}")

    for p in projects:
        print(f"- {p.name} ({p.id})")
        # Validate to_dict
        data = p.to_dict()
        print(f"  to_dict success: {len(data)} fields")

except Exception as e:
    print(f"Error: {e}")
    import traceback
    traceback.print_exc()
