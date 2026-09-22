terraform {
  required_version = ">= 1.0"
}

resource "local_file" "storvia_info" {
  filename = "${path.module}/storvia-devops.txt"

  content = <<-EOT
    STORVIA DevOps Project

    Application: Cloud Storage Platform
    Frontend: React + Vite
    Backend: Node.js + Express
    Database: MongoDB Atlas
    Storage: Cloudinary
    Containerization: Docker
    Orchestration: Docker Compose
    CI/CD: GitHub Actions
    Infrastructure as Code: Terraform
  EOT
}