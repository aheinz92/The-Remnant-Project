-- Table: Users 
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    account_type ENUM('admin', 'viewer', 'editor') DEFAULT 'viewer',
    settings JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: Artifacts
-- This table will store the basic information about each archival item.
CREATE TABLE Artifacts (
    artifact_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    -- You might decide to add a “primary” media reference here (or leave that to the Media table)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- Additional fields can be added based on future needs
);

-- Table: Media
-- A single artifact can have multiple media files (images, video, audio, 3d scans, etc.)
CREATE TABLE Media (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    artifact_id INT NOT NULL,
    media_type ENUM('image', 'video', 'audio', '3d_scan') NOT NULL,
    media_url VARCHAR(1024) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id)
);

-- Table: Artifact_Years
-- Allowing multiple “year” entries with extra information per artifact.
CREATE TABLE Artifact_Years (
    artifact_year_id INT AUTO_INCREMENT PRIMARY KEY,
    artifact_id INT NOT NULL,
    year VARCHAR(10) NOT NULL,   -- using VARCHAR to allow approximate dates or ranges if needed
    descriptor VARCHAR(255),
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id)
);

-- Table: Locations
-- A lookup table of locations (e.g., where an artifact was found, or a location descriptor)
CREATE TABLE Locations (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Table: Artifact_Locations
-- An artifact can be associated with multiple locations.
CREATE TABLE Artifact_Locations (
    artifact_location_id INT AUTO_INCREMENT PRIMARY KEY,
    artifact_id INT NOT NULL,
    location_id INT NOT NULL,
    extra_info VARCHAR(255),
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id),
    FOREIGN KEY (location_id) REFERENCES Locations(location_id)
);

-- Table: Categories
-- For the more formal or curated taxonomic grouping.
CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-- Join table: Artifact_Categories
CREATE TABLE Artifact_Categories (
    artifact_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (artifact_id, category_id),
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

-- Table: Tags
-- For community-editable keywords.
CREATE TABLE Tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Join table: Artifact_Tags
CREATE TABLE Artifact_Tags (
    artifact_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (artifact_id, tag_id),
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);

-- Table: Comments
-- Allowing users to submit text (or later multimedia) comments on individual artifacts.
CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    artifact_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Table: Artifact_Groups 
-- Groups of individual items that are treated as a single unit when displayed.
CREATE TABLE Artifact_Groups (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),  -- Nullable: could fallback on first item’s title if null
    description TEXT,
    default_artifact_id INT,   -- The primary artifact to display by default
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (default_artifact_id) REFERENCES Artifacts(artifact_id)
);

-- Join table: Group_Artifacts
-- Associate multiple artifacts to an Artifact Group.
CREATE TABLE Group_Artifacts (
    group_artifact_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT NOT NULL,
    artifact_id INT NOT NULL,
    FOREIGN KEY (group_id) REFERENCES Artifact_Groups(group_id),
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id)
);

-- Table: Artifact_Relationships 
-- To capture a relationship between two artifacts (e.g., drawing deeper connections).
CREATE TABLE Artifact_Relationships (
    relationship_id INT AUTO_INCREMENT PRIMARY KEY,
    artifact_id_a INT NOT NULL,
    artifact_id_b INT NOT NULL,
    relationship_description TEXT,
    -- Optionally, you can include a media reference (like an audio narration of the connection)
    media_id INT,
    FOREIGN KEY (artifact_id_a) REFERENCES Artifacts(artifact_id),
    FOREIGN KEY (artifact_id_b) REFERENCES Artifacts(artifact_id),
    FOREIGN KEY (media_id) REFERENCES Media(media_id)
);

-- Table: Special_Collections 
-- Curated collections or exhibits (which might later tie into VR experiences or dedicated physical spaces).
CREATE TABLE Special_Collections (
    collection_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    curator VARCHAR(255),           -- Name or reference to the organizer/curator
    location VARCHAR(255),          -- E.g., "Room A / VR Room 1" or other descriptive text
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Join table: Collection_Artifacts 
-- Associate artifacts with a Special Collection.
CREATE TABLE Collection_Artifacts (
    collection_artifact_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_id INT NOT NULL,
    artifact_id INT NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES Special_Collections(collection_id),
    FOREIGN KEY (artifact_id) REFERENCES Artifacts(artifact_id)
);