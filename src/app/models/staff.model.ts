/**
 * Describes the structure of one staff member.
 */
export interface StaffMember {
    id: number;
    name: string;
    department: string;
    role: string;
    bio: string;
    quote: string;
    photo: string;
    featured: boolean;
}