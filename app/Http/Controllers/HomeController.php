<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function view() {
        if (Auth::user() === null) {
            return view('index');
        }

        // Get comments from the latest id
        $comments = Comment::latest('id')->get();

        return view('index', [
            'username' => Auth::user()->username,
            'commentCount' => count($comments),
            'comments' => $comments
        ]);
    }

    public function handleComment(Request $req) {
        // Get data from request
        $data = $req->validate([
            'comment' => 'required'
        ]);

        // Get current user
        $user = Auth::user();

        $data['userId'] = $user->id;
        $data['username'] = $user->username;

        // Create comment
        Comment::create($data);

        return redirect()->intended('/#ideas');
    }

    public function handleDeleteComment(int $id) {
        // Find comment using it's id
        $comment = Comment::find($id);

        // Delete current comment
        $comment->delete();

        return redirect()->intended('/#ideas');
    }

    public function handleUpdateComment(Request $req) {
        // Get comment id
        $commentId = $req->input('id');
        // Get context comment using it's id
        $comment = Comment::find($commentId);

        // Possiblity of multi-account actions (delete & update) in same time
        if ($comment === null) {
            return abort(400);
        }

        // Get data from request
        $data = $req->validate([
            'comment' => 'required'
        ]);

        $comment->comment = $data['comment'];

        // Update current comment
        $comment->save();

        return redirect()->intended('/#ideas');
    }
}
