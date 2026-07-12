function love.conf(t)
    -- Basic Settings
    t.window.title = "Test"
    t.window.icon = "assets/images/icon.png"
    t.version = "11.5"

    -- Window Settings
    t.window.minwidth = 640
    t.window.minheight = 480    
    t.window.width = 640
    t.window.height = 480
    t.window.resizable = true
    t.window.vsync = 1 -- 1 = true

    -- Fullscreen Settings
    t.window.fullscreen = false
    t.window.borderless = false

    -- Audio Settings
    t.audio.mic = false
    t.audio.mixwithsystem = true

    -- Window Position
    t.window.x = 500
    t.window.y = 500

    -- Module Settings
    t.console = true
    t.modules.joystick = false
    t.modules.physics = true
    t.modules.sound = true
    t.modules.video = true
    t.modules.audio = true
end