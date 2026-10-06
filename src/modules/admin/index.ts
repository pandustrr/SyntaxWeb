// ─── Admin Module Public API ─────────────────────────────────────────────────
// Components
export { default as LoginForm } from './components/LoginForm';
export { default as ProjectTable } from './components/ProjectTable';
export { default as UserForm } from './components/UserForm';
export { default as AdminSidebar } from './components/AdminSidebar';

// Hooks
export { useProjects } from './hooks/useProjects';
export { useAuth } from './hooks/useAuth';

// Server Actions (usable from API routes or server components)
export { loginAction, logoutAction } from './actions/auth';
export { getProjectsAction, createProjectAction, updateProjectAction, deleteProjectAction } from './actions/projects';
export { getUsersAction, createUserAction, deleteUserAction } from './actions/users';

// Types
export type { AdminUser, AdminProject, LoginCredentials, LoginResult } from './types';
