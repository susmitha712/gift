import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Download, 
  LogOut, 
  Search, 
  Users, 
  FileText, 
  Filter,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demo
const mockApplications = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    role: "Software Engineer",
    skills: "Python, Java, C++",
    appliedAt: "2024-12-12",
    resume: "resume_rahul.pdf",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    role: "Software Engineer",
    skills: "Java, Spring Boot, SQL",
    appliedAt: "2024-12-11",
    resume: "resume_priya.pdf",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@email.com",
    phone: "+91 76543 21098",
    role: "Full Stack Developer",
    skills: "React, Node.js, MongoDB",
    appliedAt: "2024-12-10",
    resume: "resume_amit.pdf",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@email.com",
    phone: "+91 65432 10987",
    role: "Software Engineer",
    skills: "Python, Machine Learning, TensorFlow",
    appliedAt: "2024-12-09",
    resume: "resume_sneha.pdf",
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  const filteredApplications = mockApplications.filter((app) => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || app.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleLogout = () => {
    navigate("/admin");
  };

  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Admin <span className="gradient-text">Dashboard</span>
            </h1>
            <p className="text-muted-foreground">
              Manage and review job applications
            </p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="glass rounded-xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{mockApplications.length}</p>
              <p className="text-sm text-muted-foreground">Total Applications</p>
            </div>
          </div>
          <div className="glass rounded-xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <FileText className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">New Today</p>
            </div>
          </div>
          <div className="glass rounded-xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Eye className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Reviewed</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="glass rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Software Engineer">Software Engineer</SelectItem>
                <SelectItem value="Full Stack Developer">Full Stack Developer</SelectItem>
                <SelectItem value="Senior Software Engineer">Senior Software Engineer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Applications Table */}
        <div className="glass rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-foreground">Name</TableHead>
                <TableHead className="text-foreground">Email</TableHead>
                <TableHead className="text-foreground hidden md:table-cell">Phone</TableHead>
                <TableHead className="text-foreground">Role</TableHead>
                <TableHead className="text-foreground hidden lg:table-cell">Skills</TableHead>
                <TableHead className="text-foreground hidden md:table-cell">Applied</TableHead>
                <TableHead className="text-foreground text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No applications found
                  </TableCell>
                </TableRow>
              ) : (
                filteredApplications.map((app) => (
                  <TableRow key={app.id} className="border-white/10">
                    <TableCell className="font-medium">{app.name}</TableCell>
                    <TableCell className="text-muted-foreground">{app.email}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">
                      {app.phone}
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-md bg-primary/20 text-primary text-xs">
                        {app.role}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden lg:table-cell max-w-[200px] truncate">
                      {app.skills}
                    </TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">
                      {app.appliedAt}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        <span className="hidden sm:inline">Resume</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
