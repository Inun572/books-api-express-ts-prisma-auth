declare type UserPublicData = {
  id: number;
  name: string;
  email: string;
  is_blocked: boolean;
  role_id: number;
};

declare type ValidateLogin = {
  email: string;
  password: string;
};

declare enum Role {
  ADMINISTRATOR = 'administrator',
  REGULAR_USER = 'regular_user',
}

declare enum Permission {
  BROWSE_BOOKS = 'browse_books',
  READ_BOOK = 'read_book',
  EDIT_BOOK = 'edit_book',
  ADD_BOOK = 'add_book',
  DELETE_BOOK = 'delete_book',

  BROWSE_AUTHORS = 'browse_authors',
  READ_AUTHOR = 'read_author',
  EDIT_AUTHOR = 'edit_author',
  ADD_AUTHOR = 'add_author',
  DELETE_AUTHOR = 'delete_author',

  BROWSE_PUBLISHERS = 'browse_publishers',
  READ_PUBLISHER = 'read_publisher',
  EDIT_PUBLISHER = 'edit_publisher',
  ADD_PUBLISHER = 'add_publisher',
  DELETE_PUBLISHER = 'delete_publisher',

  BROWSE_CATEGORIES = 'browse_categories',
  READ_CATEGORY = 'read_category',
  EDIT_CATEGORY = 'edit_category',
  ADD_CATEGORY = 'add_category',
  DELETE_CATEGORY = 'delete_category',
}

declare type PermissionString = keyof typeof Permission;
