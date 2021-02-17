import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  showForm: boolean = false;

  myPosts: Post[] = [
    {
      title: 'Something about Tuesday',
      thought: 'Today seems long',
    },
    {
      title: 'Paczki',
      thought: 'Gimme that deliciousness',
    },
    {
      title: 'Wowee',
      thought: "I'm feeling pretty good today",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post);
    this.toggleForm();
  };

  toggleForm = () => {
    this.showForm = !this.showForm;
  };
}
