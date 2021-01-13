<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Models\Project;
use App\repositories\ProjectRepository;

class ProjectsController extends Controller
{
    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }
    public function index()
    {
        $projects = $this->projectRepository->getAll();

        return response()->json([
            'success' => true,
            'message' => 'Project List',
            'data'    => $projects
        ]);
    }
    
    public function show($id)
    {
        $project = $this->projectRepository->findById($id);
        if (is_null($project)) {
            return response()->json([
                'success' => false,
                'message' => 'Project Details',
                'data'    => null
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Project Details',
            'data'    => $project
        ]);
    }

    public function store(Request $request)
    {
        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ], [
            'name.required' => 'Please give project name',
            'description.required' => 'Please give project description',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            ]);
        }

        $project = $this->projectRepository->create($request);
        return response()->json([
            'success' => true,
            'message' => 'Project Stored',
            'data'    => $project
        ]);
    }

    public function update(Request $request, $id)
    {
        $project = $this->projectRepository->findById($id);
        if (is_null($project)) {
            return response()->json([
                'success' => false,
                'message' => 'Project Not found',
                'data' => null,
            ]);
        }

        $formData = $request->all();
        $validator = \Validator::make($formData, [
            'name' => 'required',
            'description' => 'required',
            'user_id' => 'required'
        ], [
            'name.required' => 'Please give project name',
            'description.required' => 'Please give project description',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag(),
            ]);
        }

        $project = $this->projectRepository->edit($request, $id);
        return response()->json([
            'success' => true,
            'message' => 'Project Updated',
            'data'    => $project
        ]);
    }
    public function destroy($id)
    {
        $project = $this->projectRepository->findById($id);
        if (is_null($project)) {
            return response()->json([
                'success' => false,
                'message' => 'Project Not found',
                'data' => null,
            ]);
        }
        $project = $this->projectRepository->delete($id);
        return response()->json([
            'success' => true,
            'message' => 'Project Deleted',
            'data'    => $project
        ]);
    }
}
