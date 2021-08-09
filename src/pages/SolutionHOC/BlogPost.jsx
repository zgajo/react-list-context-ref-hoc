class BlogPost extends React.Component {
  render() {
    return <TextBlock text={this.props.data} />;
  }
}

export const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);

<BlogPostWithSubscription />;
