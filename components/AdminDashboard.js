"use client";

import { useEffect, useState } from "react";

import {
  FilePlus2,
  LockKeyhole,
  Search,
 ShieldCheck,
  Upload
} from "lucide-react";

import { adminModules } from "@/data/site";

const dashboardStats = [
  {
    label: "Content Modules",
    value: "08",
    icon: <FilePlus2 size={18} />
  },
  {
    label: "System Status",
    value: "Active",
    icon: <ShieldCheck size={18} />
  },
  {
    label: "SEO Monitoring",
    value: "Enabled",
    icon: <Search size={18} />
  },
  {
    label: "Media Library",
    value: "Connected",
    icon: <Upload size={18} />
  }
];

export function AdminDashboard() {

  const [unlocked, setUnlocked] = useState(false);

  const [password, setPassword] = useState("");

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");

  const [sector, setSector] = useState("");

  const [description, setDescription] = useState("");

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const token = localStorage.getItem(
      "netculture_admin_token"
    );

    if (token) {
      setUnlocked(true);
    }

    fetchProjects();

  }, []);

  async function fetchProjects() {

    try {

      const response = await fetch(
        "/api/projects"
      );

      const data =
        await response.json();

      if (data.success) {
        setProjects(data.projects);
      }

    } catch (error) {

      console.log(error);

    }
  }

  async function handleLogin(event) {

    event.preventDefault();

    setLoading(true);

    try {

      const response = await fetch(
        "/api/admin",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            username: "admin",
            password
          })
        }
      );

      const data =
        await response.json();

      if (data.success) {

        localStorage.setItem(
          "netculture_admin_token",
          data.token
        );

        setUnlocked(true);

      } else {

        alert(
          data.message ||
          "Wrong password"
        );

      }

    } catch (error) {

      alert("Login failed");

    }

    setLoading(false);
  }

  async function createProject() {

    try {

      let uploadedImage = "";

      if (image) {

        const uploadResponse =
          await fetch(
            "/api/upload",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body: JSON.stringify({
                image
              })
            }
          );

        const uploadData =
          await uploadResponse.json();

        if (uploadData.success) {

          uploadedImage =
            uploadData.imageUrl;

        }
      }

      const response = await fetch(
        "/api/projects",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            title,
            sector,
            description,
            image: uploadedImage
          })
        }
      );

      const data =
        await response.json();

      if (data.success) {

        alert("Project created");

        setTitle("");
        setSector("");
        setDescription("");
        setImage("");

        fetchProjects();

      }

    } catch (error) {

      alert(
        "Failed to create project"
      );

    }
  }

  async function deleteProject(id) {

    try {

      const response = await fetch(
        "/api/projects",
        {
          method: "DELETE",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            id
          })
        }
      );

      const data =
        await response.json();

      if (data.success) {
        fetchProjects();
      }

    } catch (error) {

      alert(
        "Failed to delete project"
      );

    }
  }

  function handleLogout() {

    localStorage.removeItem(
      "netculture_admin_token"
    );

    setUnlocked(false);
  }

  if (!unlocked) {

    return (

      <section className="section-band">

        <div className="site-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          <div>

            <span className="eyebrow">
              Admin Dashboard
            </span>

            <h1 className="mt-4 font-display text-5xl font-black leading-tight md:text-7xl">
              Secure management dashboard for NetCulture systems.
            </h1>

            <p className="muted mt-5 max-w-2xl leading-8">
              Manage content,
              portfolio sections,
              media assets,
              SEO settings,
              analytics and workflows
              from a centralized dashboard.
            </p>

          </div>

          <form
            className="edge-card p-6"
            onSubmit={handleLogin}
          >

            <div className="grid h-14 w-14 place-items-center rounded-lg bg-brand-sky/15 text-brand-sky">
              <LockKeyhole size={24} />
            </div>

            <h2 className="mt-5 font-display text-3xl font-black">
              Admin Login
            </h2>

            <p className="muted mt-2 text-sm leading-7">
              Secure administrator
              access for NetCulture systems.
            </p>

            <label className="mt-6 grid gap-2 text-sm font-bold text-white/70">

              Admin Password

              <input
                className="form-field"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value
                  )
                }
                placeholder="Enter admin password"
              />

            </label>

            <button
              className="premium-button crimson mt-5 w-full"
              type="submit"
              disabled={loading}
            >

              {loading
                ? "Checking..."
                : "Unlock Dashboard"}

            </button>

          </form>

        </div>

      </section>
    );
  }

  return (

    <section className="section-band">

      <div className="site-container">

        <div className="flex flex-wrap items-end justify-between gap-5">

          <div>

            <span className="eyebrow">
              Admin Dashboard
            </span>

            <h1 className="mt-4 font-display text-5xl font-black md:text-7xl">
              NetCulture Control Center
            </h1>

          </div>

          <button
            className="premium-button secondary"
            type="button"
            onClick={handleLogout}
          >
            Lock Dashboard
          </button>

        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">

          {dashboardStats.map(
            (metric) => (

              <div
                className="edge-card p-5"
                key={metric.label}
              >

                <span className="text-brand-sky">
                  {metric.icon}
                </span>

                <p className="mt-4 text-xs font-black uppercase text-white/45">
                  {metric.label}
                </p>

                <strong className="mt-1 block font-display text-3xl">
                  {metric.value}
                </strong>

              </div>

            )
          )}

        </div>

        <div className="edge-card p-5 mt-5">

          <h2 className="font-display text-2xl font-black">
            Create Project
          </h2>

          <div className="mt-5 grid gap-4">

            <input
              type="file"
              className="form-field"
              onChange={(e) => {

                const file =
                  e.target.files[0];

                const reader =
                  new FileReader();

                reader.onloadend =
                  () => {
                    setImage(
                      reader.result
                    );
                  };

                if (file) {
                  reader.readAsDataURL(
                    file
                  );
                }

              }}
            />

            <input
              className="form-field"
              placeholder="Project title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
            />

            <input
              className="form-field"
              placeholder="Sector"
              value={sector}
              onChange={(e) =>
                setSector(
                  e.target.value
                )
              }
            />

            <textarea
              className="form-field"
              placeholder="Description"
              rows={5}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />

            <button
              className="premium-button crimson"
              onClick={createProject}
            >
              Create Project
            </button>

          </div>

        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">

          <div className="edge-card p-5">

            <div className="flex items-center justify-between gap-4">

              <h2 className="font-display text-2xl font-black">
                Content Modules
              </h2>

              <FilePlus2
                className="text-brand-sky"
                size={20}
              />

            </div>

            <div className="mt-5 grid gap-3">

              {adminModules.map(
                (module) => (

                  <div
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/75"
                    key={module}
                  >

                    <span>
                      {module}
                    </span>

                    <button
                      className="premium-button secondary"
                      onClick={() => {

                        if (
                          module ===
                          "Portfolio management"
                        ) {

                          alert(
                            "Portfolio Manager Opened"
                          );

                        }

                        else if (
                          module ===
                          "Blog management"
                        ) {

                          alert(
                            "Blog Manager Opened"
                          );

                        }

                        else if (
                          module ===
                          "Project upload system"
                        ) {

                          window.scrollTo({
                            top: 500,
                            behavior:
                              "smooth"
                          });

                        }

                        else if (
                          module ===
                          "Media library"
                        ) {

                          window.open(
                            "https://console.cloudinary.com",
                            "_blank"
                          );

                        }

                        else {

                          alert(
                            module +
                            " module coming soon"
                          );

                        }

                      }}
                    >

                      Manage

                    </button>

                  </div>

                )
              )}

            </div>

          </div>

          <div className="edge-card p-5">

            <h2 className="font-display text-2xl font-black">
              Live Projects
            </h2>

            <div className="mt-5 grid gap-3">

              {projects.map(
                (item) => (

                  <div
                    className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                    key={item.id}
                  >

                    <div>

                      {item.image && (

                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-lg mb-3 w-full h-48 object-cover"
                        />

                      )}

                      <p className="font-black">
                        {item.title}
                      </p>

                      <p className="muted text-sm">
                        {item.sector}
                      </p>

                      <p className="muted text-sm mt-2">
                        {item.description}
                      </p>

                    </div>

                    <div className="flex gap-3 items-center">

                      <strong className="text-brand-sky">
                        Active
                      </strong>

                      <button
                        className="text-red-400 text-sm"
                        onClick={() =>
                          deleteProject(
                            item.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}