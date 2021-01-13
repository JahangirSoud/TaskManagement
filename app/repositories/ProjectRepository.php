<?php
namespace App\repositories;
use App\interfaces\crud;
use Illuminate\Http\Request;
use App\Models\Models\Project;

class ProjectRepository implements crud
{
    public function getAll()
    {
        $projects = Project::all();
        return $projects;
    }
    public function findById($id)
    {
        $project = Project::with('tasks')
            ->find($id);
        return $project;
    }
    public function create(Request $request)
    {
        $project = new Project();
        $project->name = $request->name;
        $project->description = $request->description;
        $project->user_id = $request->user_id;
        $project->save();
        return $project;
    }
    public function edit(Request $request, $id)
    {
        $project = $this->findById($id);
        $project->name = $request->name;
        $project->description = $request->description;
        $project->user_id = $request->user_id;
        $project->save();
        return $project;
    }
    public function delete($id)
    {
        $project = $this->findById($id);
        $project->tasks()->delete();
        $project->delete();  
        return $project;
    }
}