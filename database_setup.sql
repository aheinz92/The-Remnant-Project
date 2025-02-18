-- ============================================
-- Table: Users
-- Basic user accounts (admins, editors, viewers)
-- ============================================
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    account_type ENUM('admin', 'viewer', 'editor') DEFAULT 'viewer',
    settings JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- Table: Items
-- This replaces “Artifacts” and stores the core description 
-- for every digitized object. Note that here we include extra
-- metadata fields inspired by Dublin Core.
-- ============================================
CREATE TABLE Items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Basic text fields
    title VARCHAR(255) NOT NULL,
    initial_notes TEXT,         -- minimal, initial text notes for an object 
    description TEXT,
    
    -- Dublin Core–inspired metadata fields
    dc_subject TEXT,            -- e.g., topics or keywords
    dc_creator VARCHAR(255),    -- who originally made/created the item
    dc_publisher VARCHAR(255),  -- who makes the item available
    dc_contributor TEXT,        -- additional contributing entities
    dc_date VARCHAR(32),        -- a date or period (using text allows approximations or ranges)
    dc_type VARCHAR(64),        -- nature or genre of the item (e.g., photograph, document, artifact)
    dc_format VARCHAR(64),      -- file format or physical medium info if applicable
    dc_identifier VARCHAR(255), -- external/internal unique identifier
    dc_source TEXT,             -- if derived from another resource
    dc_language VARCHAR(10),    -- ISO 639 language code
    dc_coverage TEXT,           -- spatial or temporal coverage (e.g., location descriptor)
    dc_rights TEXT,             -- copyright or rights statements
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- Table: Media
-- A media file – whether image, video, audio, or 3d-scan – 
-- may be attached to an Item or used (by reference) for other 
-- purposes (like relationship narration or collection images).
-- We add a “usage” column so that the system can tell, for example,
-- whether a file is the full-quality archival version or a reduced version.
-- ============================================
CREATE TABLE Media (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT DEFAULT NULL,   -- direct association to an item (optional)
    
    media_type ENUM('image', 'video', 'audio', '3d_scan') NOT NULL,
    media_usage ENUM('archive', 'display') DEFAULT 'archive', -- distinguishes the resolution/quality
    media_url VARCHAR(1024) NOT NULL,
    description TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (item_id) REFERENCES Items(item_id) ON DELETE SET NULL
);

-- ============================================
-- Table: Categories
-- Formal, curated subject groupings.
-- ============================================
CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-- ============================================
-- Join Table: Item_Categories
-- Many-to-many relationship: an item can belong to multiple categories
-- ============================================
CREATE TABLE Item_Categories (
    item_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (item_id, category_id),
    FOREIGN KEY (item_id) REFERENCES Items(item_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

-- ============================================
-- Table: Tags
-- Community-editable keywords.
-- ============================================
CREATE TABLE Tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- ============================================
-- Join Table: Item_Tags
-- Many-to-many relationship: an item can have multiple tags.
-- ============================================
CREATE TABLE Item_Tags (
    item_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (item_id, tag_id),
    FOREIGN KEY (item_id) REFERENCES Items(item_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);

-- ============================================
-- Table: Comments
-- Comments (which may also include a media attachment) on an item.
-- ============================================
CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    media_id INT DEFAULT NULL,  -- optional media reference for the comment
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (item_id) REFERENCES Items(item_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (media_id) REFERENCES Media(media_id)
);

-- ============================================
-- Table: Item_Relationships
-- Captures user-specified or curated links between two items.
-- May include extra description or a media reference (e.g., audio narration).
-- ============================================
CREATE TABLE Item_Relationships (
    relationship_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id_a INT NOT NULL,
    item_id_b INT NOT NULL,
    relationship_description TEXT,
    media_id INT DEFAULT NULL,  -- optional media to illustrate the connection
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (item_id_a) REFERENCES Items(item_id),
    FOREIGN KEY (item_id_b) REFERENCES Items(item_id),
    FOREIGN KEY (media_id) REFERENCES Media(media_id)
);

-- ============================================
-- Table: Special_Collections
-- Curated collections or exhibits (which can also be used 
-- to drive themed presentations in VR or physical spaces).
-- ============================================
CREATE TABLE Special_Collections (
    collection_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    curator VARCHAR(255),     -- name or reference to the organizer/curator
    location VARCHAR(255),    -- e.g., “Room A”, “VR Room 1”, etc.
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- Join Table: Collection_Items
-- Associates multiple items with a Special Collection.
-- ============================================
CREATE TABLE Collection_Items (
    collection_item_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES Special_Collections(collection_id),
    FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

-- ============================================
-- Join Table: Collection_Media
-- Allows a Special Collection to have its own media (for example,
-- a banner image or a promotional video not tied to a specific item).
-- ============================================
CREATE TABLE Collection_Media (
    collection_media_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_id INT NOT NULL,
    media_id INT NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES Special_Collections(collection_id),
    FOREIGN KEY (media_id) REFERENCES Media(media_id)
);